package com.jonas.malagasy

import android.annotation.SuppressLint
import android.content.Context
import android.os.Bundle
import android.view.KeyEvent
import android.view.View
import android.view.animation.AlphaAnimation
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ProgressBar
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.io.File
import java.io.FileOutputStream

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var progressBar: ProgressBar
    private lateinit var splashView: View
    private lateinit var splashTitle: TextView
    private lateinit var splashSubtitle: TextView

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        progressBar = findViewById(R.id.progressBar)
        splashView = findViewById(R.id.splashView)
        splashTitle = findViewById(R.id.splashTitle)
        splashSubtitle = findViewById(R.id.splashSubtitle)

        // Extract web assets to local storage (first run only)
        extractWebAssets()

        // Configure WebView
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            cacheMode = WebSettings.LOAD_DEFAULT
            useWideViewPort = true
            loadWithOverviewMode = true
            setSupportZoom(false)
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(view: WebView?, newProgress: Int) {
                progressBar.progress = newProgress
                if (newProgress == 100) {
                    progressBar.visibility = View.GONE
                    fadeOutSplash()
                } else {
                    progressBar.visibility = View.VISIBLE
                }
            }
        }

        webView.webViewClient = object : WebViewClient() {
            override fun onReceivedError(
                view: WebView?,
                request: WebResourceRequest?,
                error: WebResourceError?
            ) {
                // Silently ignore errors for local file loads
            }

            override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: WebResourceRequest?
            ): Boolean {
                // Stay within the app for all navigation
                return false
            }
        }

        // Load local HTML
        val appDir = File(filesDir, "web")
        val indexFile = File(appDir, "index.html")
        if (indexFile.exists()) {
            webView.loadUrl("file://${indexFile.absolutePath}")
        } else {
            // Fallback: load from assets directly
            webView.loadUrl("file:///android_asset/web/index.html")
        }
    }

    private fun fadeOutSplash() {
        val fadeOut = AlphaAnimation(1.0f, 0.0f).apply {
            duration = 400
            fillAfter = true
        }
        splashView.startAnimation(fadeOut)
        splashView.postDelayed({ splashView.visibility = View.GONE }, 400)
    }

    private fun extractWebAssets() {
        val appDir = File(filesDir, "web")
        val indexFile = File(appDir, "index.html")

        // If already extracted and recent, skip
        if (indexFile.exists() && indexFile.length() > 0) return

        appDir.mkdirs()
        val files = listOf("index.html", "style.css", "app.js", "lessons.js")
        for (name in files) {
            try {
                assets.open("web/$name").use { input ->
                    FileOutputStream(File(appDir, name)).use { output ->
                        input.copyTo(output)
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK && webView.canGoBack()) {
            webView.goBack()
            return true
        }
        return super.onKeyDown(keyCode, event)
    }
}
