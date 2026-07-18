package com.jonas.malagasy

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ProgressBar
import android.widget.FrameLayout
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var progressBar: ProgressBar

    /**
     * JS-callable bridge that tracks in-page navigation depth.
     *
     * The web app is a single-page app: the WebView URL never changes, so
     * WebView.canGoBack() is always false and Android's back gesture/swipe
     * would close the app. Instead, the JS layer bumps navDepth each time the
     * user descends into an overlay (lesson view, search sheet, etc.) and
     * decrements it when they come back. The native back handler asks this
     * bridge whether there is internal navigation to undo before deciding
     * whether to fall through to system back (exit).
     */
    inner class BackBridge {
        @Volatile var navDepth: Int = 0

        /** Called from JS: push one level of internal navigation. */
        @JavascriptInterface
        fun pushNav() { navDepth++ }

        /** Called from JS: pop one level of internal navigation (clamped at 0). */
        @JavascriptInterface
        fun popNav() { if (navDepth > 0) navDepth-- }

        /** Called from JS: reset internal navigation (e.g. on app init / home). */
        @JavascriptInterface
        fun resetNav() { navDepth = 0 }
    }

    private val backBridge = BackBridge()

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Intercept system back (hardware button + Android 13+ predictive back
        // swipe). If the JS layer has internal navigation to undo, ask it to
        // go back instead of letting the system finish the activity.
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (backBridge.navDepth > 0) {
                    webView.evaluateJavascript("window.__appBack && window.__appBack();", null)
                } else {
                    // Nothing internal to undo — honor system back (exit app).
                    isEnabled = false
                    onBackPressedDispatcher.onBackPressed()
                }
            }
        })

        // Hide status bar but keep app functional
        window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_FULLSCREEN

        // Root layout
        val rootLayout = FrameLayout(this).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
        }

        // Progress bar at top
        progressBar = ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, 6
            )
            visibility = View.VISIBLE
            max = 100
        }

        // WebView
        webView = WebView(this).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
        }

        rootLayout.addView(webView)
        rootLayout.addView(progressBar)
        setContentView(rootLayout)

        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            cacheMode = WebSettings.LOAD_DEFAULT
            useWideViewPort = true
            loadWithOverviewMode = true
            setSupportZoom(false)
            allowFileAccess = true
            allowContentAccess = true
            allowFileAccessFromFileURLs = true
            allowUniversalAccessFromFileURLs = true
            javaScriptCanOpenWindowsAutomatically = true
            // Important for touch events
            setSupportMultipleWindows(false)
            mediaPlaybackRequiresUserGesture = false
        }

        // Expose the back bridge to the JS layer so it can report in-page
        // navigation depth. The JS side calls AndroidBack.pushNav()/popNav()/
        // resetNav() and exposes window.__appBack() to actually perform the
        // back action when the native handler asks for it.
        webView.addJavascriptInterface(backBridge, "AndroidBack")

        // Enable touch events properly
        webView.isFocusable = true
        webView.isFocusableInTouchMode = true
        webView.requestFocus(View.FOCUS_DOWN)

        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                view?.evaluateJavascript(
                    "document.body.style.touchAction = 'manipulation';" +
                    "document.querySelectorAll('*').forEach(el => { el.style.webkitTapHighlightColor = 'transparent'; });",
                    null
                )
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(view: WebView?, newProgress: Int) {
                progressBar.progress = newProgress
                if (newProgress == 100) {
                    progressBar.visibility = View.GONE
                } else {
                    progressBar.visibility = View.VISIBLE
                }
            }
        }

        // Load from bundled assets
        webView.loadUrl("file:///android_asset/web/index.html")
    }

    // NOTE: Hardware back + Android 13+ predictive back swipe are handled by
    // the OnBackPressedDispatcher callback registered in onCreate. There is
    // no separate onKeyDown() handler for back — the dispatcher covers both.

    override fun onResume() {
        super.onResume()
        webView.onResume()
        webView.resumeTimers()
    }

    override fun onPause() {
        super.onPause()
        webView.onPause()
        webView.pauseTimers()
    }

    override fun onDestroy() {
        webView.destroy()
        super.onDestroy()
    }
}
