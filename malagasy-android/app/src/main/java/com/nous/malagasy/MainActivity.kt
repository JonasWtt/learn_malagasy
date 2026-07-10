package com.nous.malagasy

import android.content.Context
import android.os.Bundle
import android.view.View
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ProgressBar
import android.widget.RelativeLayout
import androidx.appcompat.app.AppCompatActivity
import androidx.webkit.WebViewAssetLoader
import java.io.File
import java.io.FileOutputStream

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var progressBar: ProgressBar
    private lateinit var assetLoader: WebViewAssetLoader

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Copy bundled web assets to local storage on first run
        copyAssetsToLocal()

        // Build the layout programmatically (no XML needed)
        val rootLayout = RelativeLayout(this).apply {
            layoutParams = RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.MATCH_PARENT,
                RelativeLayout.LayoutParams.MATCH_PARENT
            )
        }

        webView = WebView(this).apply {
            id = View.generateViewId()
            layoutParams = RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.MATCH_PARENT,
                RelativeLayout.LayoutParams.MATCH_PARENT
            )
        }

        progressBar = ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal).apply {
            id = View.generateViewId()
            layoutParams = RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.MATCH_PARENT,
                12 // 12px height for the thin progress bar
            ).apply {
                addRule(RelativeLayout.ALIGN_PARENT_TOP)
            }
            visibility = View.VISIBLE
            isIndeterminate = false
            max = 100
            progressDrawable = resources.getDrawable(android.R.drawable.progress_horizontal, null)
        }

        rootLayout.addView(webView)
        rootLayout.addView(progressBar)
        setContentView(rootLayout)

        setupWebView()
    }

    private fun setupWebView() {
        // Asset loader to serve local files securely via HTTPS
        assetLoader = WebViewAssetLoader.Builder()
            .setDomain("app.malagasy.local")
            .addPathHandler("/assets/", WebViewAssetLoader.InternalStoragePathHandler(this, File(filesDir, "www")))
            .build()

        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            cacheMode = WebSettings.LOAD_DEFAULT
            useWideViewPort = true
            loadWithOverviewMode = true
            setSupportZoom(false)
        }

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url) ?: super.shouldInterceptRequest(view, request)
            }

            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                // Stay inside the app for all navigation
                return false
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(view: WebView, newProgress: Int) {
                progressBar.progress = newProgress
                if (newProgress == 100) {
                    progressBar.visibility = View.GONE
                } else {
                    progressBar.visibility = View.VISIBLE
                }
            }
        }

        // Load the local index.html via the asset loader
        webView.loadUrl("https://app.malagasy.local/assets/index.html")
    }

    private fun copyAssetsToLocal() {
        val destDir = File(filesDir, "www")
        if (destDir.exists() && File(destDir, "index.html").exists()) {
            // Already extracted
            return
        }

        destDir.mkdirs()
        val files = assets.list("www") ?: return

        for (fileName in files) {
            assets.open("www/$fileName").use { input ->
                FileOutputStream(File(destDir, fileName)).use { output ->
                    input.copyTo(output)
                }
            }
        }
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
