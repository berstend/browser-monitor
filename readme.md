# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 100.0.4896.75 (`2022-4-4`) 
No browser API changes.

  
#### 100.0.4896.60 (`2022-3-29`) ⚡
Added 41 APIs, removed 18 (see: [diff](./browser_apis/chrome-stable_99.0.4844.84_to_100.0.4896.60.diff), [json](./browser_apis/chrome-stable_99.0.4844.84_to_100.0.4896.60.json), [full list](./browser_apis/chrome-stable_100.0.4896.60.json))
 ```diff
--- ./browser_apis/chrome-stable_99.0.4844.84.json	2022-06-06 02:52:32.000000000 +0800
+++ ./browser_apis/chrome-stable_100.0.4896.60.json	2022-06-06 02:52:32.000000000 +0800
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "99.0.4844.84",
-  "browserApiCount": 7341,
+  "version": "100.0.4896.60",
+  "browserApiCount": 7364,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -13,6 +13,7 @@
     "AbortSignal.prototype.aborted",
     "AbortSignal.prototype.onabort",
     "AbortSignal.prototype.reason",
+    "AbortSignal.prototype.throwIfAborted",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -487,6 +488,11 @@
     "CSSLayerStatementRule",
     "CSSLayerStatementRule.prototype",
     "CSSLayerStatementRule.prototype.nameList",
+    "CSSMathClamp",
+    "CSSMathClamp.prototype",
+    "CSSMathClamp.prototype.lower",
+    "CSSMathClamp.prototype.upper",
+    "CSSMathClamp.prototype.value",
     "CSSMathInvert",
     "CSSMathInvert.prototype",
     "CSSMathInvert.prototype.value",
@@ -665,8 +671,25 @@
     "CacheStorage.prototype.open",
     "CanvasCaptureMediaStreamTrack",
     "CanvasCaptureMediaStreamTrack.prototype",
+    "CanvasCaptureMediaStreamTrack.prototype.applyConstraints",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
+    "CanvasCaptureMediaStreamTrack.prototype.clone",
+    "CanvasCaptureMediaStreamTrack.prototype.constructor",
+    "CanvasCaptureMediaStreamTrack.prototype.contentHint",
+    "CanvasCaptureMediaStreamTrack.prototype.enabled",
+    "CanvasCaptureMediaStreamTrack.prototype.getCapabilities",
+    "CanvasCaptureMediaStreamTrack.prototype.getConstraints",
+    "CanvasCaptureMediaStreamTrack.prototype.getSettings",
+    "CanvasCaptureMediaStreamTrack.prototype.id",
+    "CanvasCaptureMediaStreamTrack.prototype.kind",
+    "CanvasCaptureMediaStreamTrack.prototype.label",
+    "CanvasCaptureMediaStreamTrack.prototype.muted",
+    "CanvasCaptureMediaStreamTrack.prototype.onended",
+    "CanvasCaptureMediaStreamTrack.prototype.onmute",
+    "CanvasCaptureMediaStreamTrack.prototype.onunmute",
+    "CanvasCaptureMediaStreamTrack.prototype.readyState",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
+    "CanvasCaptureMediaStreamTrack.prototype.stop",
     "CanvasFilter",
     "CanvasFilter.prototype",
     "CanvasGradient",
@@ -1375,6 +1398,7 @@
     "HIDDevice.prototype",
     "HIDDevice.prototype.close",
     "HIDDevice.prototype.collections",
+    "HIDDevice.prototype.forget",
     "HIDDevice.prototype.oninputreport",
     "HIDDevice.prototype.open",
     "HIDDevice.prototype.opened",
@@ -2758,24 +2782,6 @@
     "MediaStreamEvent",
     "MediaStreamEvent.prototype",
     "MediaStreamEvent.prototype.stream",
-    "MediaStreamTrack",
-    "MediaStreamTrack.prototype",
-    "MediaStreamTrack.prototype.applyConstraints",
-    "MediaStreamTrack.prototype.clone",
-    "MediaStreamTrack.prototype.contentHint",
-    "MediaStreamTrack.prototype.enabled",
-    "MediaStreamTrack.prototype.getCapabilities",
-    "MediaStreamTrack.prototype.getConstraints",
-    "MediaStreamTrack.prototype.getSettings",
-    "MediaStreamTrack.prototype.id",
-    "MediaStreamTrack.prototype.kind",
-    "MediaStreamTrack.prototype.label",
-    "MediaStreamTrack.prototype.muted",
-    "MediaStreamTrack.prototype.onended",
-    "MediaStreamTrack.prototype.onmute",
-    "MediaStreamTrack.prototype.onunmute",
-    "MediaStreamTrack.prototype.readyState",
-    "MediaStreamTrack.prototype.stop",
     "MediaStreamTrackEvent",
     "MediaStreamTrackEvent.prototype",
     "MediaStreamTrackEvent.prototype.track",
@@ -4996,9 +5002,25 @@
     "Screen.prototype.availWidth",
     "Screen.prototype.colorDepth",
     "Screen.prototype.height",
+    "Screen.prototype.isExtended",
+    "Screen.prototype.onchange",
     "Screen.prototype.orientation",
     "Screen.prototype.pixelDepth",
     "Screen.prototype.width",
+    "ScreenDetailed",
+    "ScreenDetailed.prototype",
+    "ScreenDetailed.prototype.devicePixelRatio",
+    "ScreenDetailed.prototype.isInternal",
+    "ScreenDetailed.prototype.isPrimary",
+    "ScreenDetailed.prototype.label",
+    "ScreenDetailed.prototype.left",
+    "ScreenDetailed.prototype.top",
+    "ScreenDetails",
+    "ScreenDetails.prototype",
+    "ScreenDetails.prototype.currentScreen",
+    "ScreenDetails.prototype.oncurrentscreenchange",
+    "ScreenDetails.prototype.onscreenschange",
+    "ScreenDetails.prototype.screens",
     "ScreenOrientation",
     "ScreenOrientation.prototype",
     "ScreenOrientation.prototype.angle",
@@ -7035,6 +7057,7 @@
     "frameElement",
     "frames",
     "getComputedStyle",
+    "getScreenDetails",
     "getSelection",
     "history",
     "indexedDB",
```

  
#### 99.0.4844.84 (`2022-3-25`) 
No browser API changes.

  
### chrome-unstable
  
#### 105.0.5148.2 (`2022-6-30`) 
No browser API changes.

  
#### 105.0.5137.4 (`2022-6-24`) ⚡
Added 23 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_104.0.5112.20_to_105.0.5137.4.diff), [json](./browser_apis/chrome-unstable_104.0.5112.20_to_105.0.5137.4.json), [full list](./browser_apis/chrome-unstable_105.0.5137.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_104.0.5112.20.json	2023-01-06 20:25:22.000000000 +0800
+++ ./browser_apis/chrome-unstable_105.0.5137.4.json	2023-01-06 20:25:22.000000000 +0800
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "104.0.5112.20",
-  "browserApiCount": 7472,
+  "version": "105.0.0.0",
+  "browserApiCount": 7494,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -417,6 +417,12 @@
     "CSS.Q",
     "CSS.ch",
     "CSS.cm",
+    "CSS.cqb",
+    "CSS.cqh",
+    "CSS.cqi",
+    "CSS.cqmax",
+    "CSS.cqmin",
+    "CSS.cqw",
     "CSS.deg",
     "CSS.dpcm",
     "CSS.dpi",
@@ -449,6 +455,8 @@
     "CSSAnimation",
     "CSSAnimation.prototype",
     "CSSAnimation.prototype.animationName",
+    "CSSContainerRule",
+    "CSSContainerRule.prototype",
     "CSSCounterStyleRule",
     "CSSCounterStyleRule.prototype",
     "CSSCounterStyleRule.prototype.additiveSymbols",
@@ -1631,6 +1639,8 @@
     "HTMLFormElement.prototype.method",
     "HTMLFormElement.prototype.name",
     "HTMLFormElement.prototype.noValidate",
+    "HTMLFormElement.prototype.rel",
+    "HTMLFormElement.prototype.relList",
     "HTMLFormElement.prototype.reportValidity",
     "HTMLFormElement.prototype.requestSubmit",
     "HTMLFormElement.prototype.reset",
@@ -1788,6 +1798,7 @@
     "HTMLLinkElement",
     "HTMLLinkElement.prototype",
     "HTMLLinkElement.prototype.as",
+    "HTMLLinkElement.prototype.blocking",
     "HTMLLinkElement.prototype.charset",
     "HTMLLinkElement.prototype.crossOrigin",
     "HTMLLinkElement.prototype.disabled",
@@ -1936,6 +1947,7 @@
     "HTMLScriptElement",
     "HTMLScriptElement.prototype",
     "HTMLScriptElement.prototype.async",
+    "HTMLScriptElement.prototype.blocking",
     "HTMLScriptElement.prototype.charset",
     "HTMLScriptElement.prototype.crossOrigin",
     "HTMLScriptElement.prototype.defer",
@@ -1994,6 +2006,7 @@
     "HTMLSpanElement.prototype",
     "HTMLStyleElement",
     "HTMLStyleElement.prototype",
+    "HTMLStyleElement.prototype.blocking",
     "HTMLStyleElement.prototype.disabled",
     "HTMLStyleElement.prototype.media",
     "HTMLStyleElement.prototype.sheet",
@@ -3012,6 +3025,7 @@
     "Navigator.prototype.webkitGetUserMedia",
     "Navigator.prototype.webkitPersistentStorage",
     "Navigator.prototype.webkitTemporaryStorage",
+    "Navigator.prototype.windowControlsOverlay",
     "Navigator.prototype.xr",
     "NavigatorManagedData",
     "NavigatorManagedData.prototype",
@@ -5959,7 +5973,6 @@
     "WebAssembly.CompileError.prototype",
     "WebAssembly.Exception",
     "WebAssembly.Exception.prototype",
-    "WebAssembly.Exception.prototype.constructor",
     "WebAssembly.Exception.prototype.getArg",
     "WebAssembly.Exception.prototype.is",
     "WebAssembly.Global",
@@ -6578,6 +6591,15 @@
     "WheelEvent.prototype.y",
     "Window",
     "Window.prototype",
+    "WindowControlsOverlay",
+    "WindowControlsOverlay.prototype",
+    "WindowControlsOverlay.prototype.getTitlebarAreaRect",
+    "WindowControlsOverlay.prototype.ongeometrychange",
+    "WindowControlsOverlay.prototype.visible",
+    "WindowControlsOverlayGeometryChangeEvent",
+    "WindowControlsOverlayGeometryChangeEvent.prototype",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.titlebarAreaRect",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.visible",
     "Worker",
     "Worker.prototype",
     "Worker.prototype.onerror",
```

  
#### 104.0.5112.20 (`2022-6-22`) 
No browser API changes.

  <!-- browserapis:end -->
