# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 103.0.5060.114 (`2022-7-4`) 
No browser API changes.

  
#### 103.0.5060.53 (`2022-6-21`) ⚡
Added 12 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_102.0.5005.115_to_103.0.5060.53.diff), [json](./browser_apis/chrome-stable_102.0.5005.115_to_103.0.5060.53.json), [full list](./browser_apis/chrome-stable_103.0.5060.53.json))
 ```diff
--- ./browser_apis/chrome-stable_102.0.5005.115.json	2022-07-12 01:38:07.455064682 +0000
+++ ./browser_apis/chrome-stable_103.0.5060.53.json	2022-07-12 01:38:07.455064682 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "102.0.5005.115",
-  "browserApiCount": 7451,
+  "version": "103.0.5060.53",
+  "browserApiCount": 7463,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -14,6 +14,7 @@
     "AbortSignal.prototype.onabort",
     "AbortSignal.prototype.reason",
     "AbortSignal.prototype.throwIfAborted",
+    "AbortSignal.timeout",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -1164,6 +1165,7 @@
     "ElementInternals.prototype.form",
     "ElementInternals.prototype.labels",
     "ElementInternals.prototype.reportValidity",
+    "ElementInternals.prototype.role",
     "ElementInternals.prototype.setFormValue",
     "ElementInternals.prototype.setValidity",
     "ElementInternals.prototype.shadowRoot",
@@ -1304,6 +1306,13 @@
     "FocusEvent",
     "FocusEvent.prototype",
     "FocusEvent.prototype.relatedTarget",
+    "FontData",
+    "FontData.prototype",
+    "FontData.prototype.blob",
+    "FontData.prototype.family",
+    "FontData.prototype.fullName",
+    "FontData.prototype.postscriptName",
+    "FontData.prototype.style",
     "FontFace",
     "FontFace.prototype",
     "FontFace.prototype.ascentOverride",
@@ -3495,6 +3504,7 @@
     "Option.prototype.constructor.prototype.replaceWith",
     "Option.prototype.constructor.prototype.requestFullscreen",
     "Option.prototype.constructor.prototype.requestPointerLock",
+    "Option.prototype.constructor.prototype.role",
     "Option.prototype.constructor.prototype.scroll",
     "Option.prototype.constructor.prototype.scrollBy",
     "Option.prototype.constructor.prototype.scrollHeight",
@@ -5169,6 +5179,7 @@
     "SerialPort",
     "SerialPort.prototype",
     "SerialPort.prototype.close",
+    "SerialPort.prototype.forget",
     "SerialPort.prototype.getInfo",
     "SerialPort.prototype.getSignals",
     "SerialPort.prototype.onconnect",
@@ -7291,6 +7302,7 @@
     "postMessage",
     "print",
     "prompt",
+    "queryLocalFonts",
     "queueMicrotask",
     "releaseEvents",
     "reportError",
```

  
#### 102.0.5005.115 (`2022-6-9`) 
No browser API changes.

  
#### 102.0.5005.61 (`2022-5-24`) ⚡
Added 79 APIs, removed 3 (see: [diff](./browser_apis/chrome-stable_101.0.4951.64_to_102.0.5005.61.diff), [json](./browser_apis/chrome-stable_101.0.4951.64_to_102.0.5005.61.json), [full list](./browser_apis/chrome-stable_102.0.5005.61.json))
 ```diff
--- ./browser_apis/chrome-stable_101.0.4951.64.json	2022-07-12 01:38:07.451064632 +0000
+++ ./browser_apis/chrome-stable_102.0.5005.61.json	2022-07-12 01:38:07.455064682 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "101.0.4951.64",
-  "browserApiCount": 7375,
+  "version": "102.0.5005.61",
+  "browserApiCount": 7451,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -222,6 +222,7 @@
     "AudioContext.prototype.createMediaStreamDestination",
     "AudioContext.prototype.createMediaStreamSource",
     "AudioContext.prototype.getOutputTimestamp",
+    "AudioContext.prototype.outputLatency",
     "AudioContext.prototype.resume",
     "AudioContext.prototype.suspend",
     "AudioData",
@@ -684,12 +685,14 @@
     "CanvasCaptureMediaStreamTrack.prototype.contentHint",
     "CanvasCaptureMediaStreamTrack.prototype.enabled",
     "CanvasCaptureMediaStreamTrack.prototype.getCapabilities",
+    "CanvasCaptureMediaStreamTrack.prototype.getCaptureHandle",
     "CanvasCaptureMediaStreamTrack.prototype.getConstraints",
     "CanvasCaptureMediaStreamTrack.prototype.getSettings",
     "CanvasCaptureMediaStreamTrack.prototype.id",
     "CanvasCaptureMediaStreamTrack.prototype.kind",
     "CanvasCaptureMediaStreamTrack.prototype.label",
     "CanvasCaptureMediaStreamTrack.prototype.muted",
+    "CanvasCaptureMediaStreamTrack.prototype.oncapturehandlechange",
     "CanvasCaptureMediaStreamTrack.prototype.onended",
     "CanvasCaptureMediaStreamTrack.prototype.onmute",
     "CanvasCaptureMediaStreamTrack.prototype.onunmute",
@@ -1131,6 +1134,7 @@
     "ElementInternals.prototype.ariaExpanded",
     "ElementInternals.prototype.ariaHasPopup",
     "ElementInternals.prototype.ariaHidden",
+    "ElementInternals.prototype.ariaInvalid",
     "ElementInternals.prototype.ariaKeyShortcuts",
     "ElementInternals.prototype.ariaLabel",
     "ElementInternals.prototype.ariaLevel",
@@ -1283,6 +1287,7 @@
     "FileSystemFileHandle.prototype",
     "FileSystemFileHandle.prototype.createWritable",
     "FileSystemFileHandle.prototype.getFile",
+    "FileSystemFileHandle.prototype.move",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
     "FileSystemWritableFileStream.prototype.seek",
@@ -1771,7 +1776,7 @@
     "HTMLLinkElement.prototype.charset",
     "HTMLLinkElement.prototype.crossOrigin",
     "HTMLLinkElement.prototype.disabled",
-    "HTMLLinkElement.prototype.fetchpriority",
+    "HTMLLinkElement.prototype.fetchPriority",
     "HTMLLinkElement.prototype.href",
     "HTMLLinkElement.prototype.hreflang",
     "HTMLLinkElement.prototype.imageSizes",
@@ -1920,7 +1925,7 @@
     "HTMLScriptElement.prototype.crossOrigin",
     "HTMLScriptElement.prototype.defer",
     "HTMLScriptElement.prototype.event",
-    "HTMLScriptElement.prototype.fetchpriority",
+    "HTMLScriptElement.prototype.fetchPriority",
     "HTMLScriptElement.prototype.htmlFor",
     "HTMLScriptElement.prototype.integrity",
     "HTMLScriptElement.prototype.noModule",
@@ -2293,7 +2298,7 @@
     "Image.prototype.currentSrc",
     "Image.prototype.decode",
     "Image.prototype.decoding",
-    "Image.prototype.fetchpriority",
+    "Image.prototype.fetchPriority",
     "Image.prototype.height",
     "Image.prototype.hspace",
     "Image.prototype.isMap",
@@ -2537,6 +2542,12 @@
     "LargestContentfulPaint.prototype.size",
     "LargestContentfulPaint.prototype.toJSON",
     "LargestContentfulPaint.prototype.url",
+    "LaunchParams",
+    "LaunchParams.prototype",
+    "LaunchParams.prototype.files",
+    "LaunchQueue",
+    "LaunchQueue.prototype",
+    "LaunchQueue.prototype.setConsumer",
     "LayoutShift",
     "LayoutShift.prototype",
     "LayoutShift.prototype.hadRecentInput",
@@ -2668,6 +2679,7 @@
     "MediaDevices.prototype.getSupportedConstraints",
     "MediaDevices.prototype.getUserMedia",
     "MediaDevices.prototype.ondevicechange",
+    "MediaDevices.prototype.setCaptureHandleConfig",
     "MediaElementAudioSourceNode",
     "MediaElementAudioSourceNode.prototype",
     "MediaElementAudioSourceNode.prototype.mediaElement",
@@ -2861,12 +2873,68 @@
     "NamedNodeMap.prototype.removeNamedItemNS",
     "NamedNodeMap.prototype.setNamedItem",
     "NamedNodeMap.prototype.setNamedItemNS",
+    "NavigateEvent",
+    "NavigateEvent.prototype",
+    "NavigateEvent.prototype.canTransition",
+    "NavigateEvent.prototype.destination",
+    "NavigateEvent.prototype.downloadRequest",
+    "NavigateEvent.prototype.formData",
+    "NavigateEvent.prototype.hashChange",
+    "NavigateEvent.prototype.info",
+    "NavigateEvent.prototype.navigationType",
+    "NavigateEvent.prototype.restoreScroll",
+    "NavigateEvent.prototype.signal",
+    "NavigateEvent.prototype.transitionWhile",
+    "NavigateEvent.prototype.userInitiated",
+    "Navigation",
+    "Navigation.prototype",
+    "Navigation.prototype.back",
+    "Navigation.prototype.canGoBack",
+    "Navigation.prototype.canGoForward",
+    "Navigation.prototype.currentEntry",
+    "Navigation.prototype.entries",
+    "Navigation.prototype.forward",
+    "Navigation.prototype.navigate",
+    "Navigation.prototype.oncurrententrychange",
+    "Navigation.prototype.onnavigate",
+    "Navigation.prototype.onnavigateerror",
+    "Navigation.prototype.onnavigatesuccess",
+    "Navigation.prototype.reload",
+    "Navigation.prototype.transition",
+    "Navigation.prototype.traverseTo",
+    "Navigation.prototype.updateCurrentEntry",
+    "NavigationCurrentEntryChangeEvent",
+    "NavigationCurrentEntryChangeEvent.prototype",
+    "NavigationCurrentEntryChangeEvent.prototype.from",
+    "NavigationCurrentEntryChangeEvent.prototype.navigationType",
+    "NavigationDestination",
+    "NavigationDestination.prototype",
+    "NavigationDestination.prototype.getState",
+    "NavigationDestination.prototype.id",
+    "NavigationDestination.prototype.index",
+    "NavigationDestination.prototype.key",
+    "NavigationDestination.prototype.sameDocument",
+    "NavigationDestination.prototype.url",
+    "NavigationHistoryEntry",
+    "NavigationHistoryEntry.prototype",
+    "NavigationHistoryEntry.prototype.getState",
+    "NavigationHistoryEntry.prototype.id",
+    "NavigationHistoryEntry.prototype.index",
+    "NavigationHistoryEntry.prototype.key",
+    "NavigationHistoryEntry.prototype.ondispose",
+    "NavigationHistoryEntry.prototype.sameDocument",
+    "NavigationHistoryEntry.prototype.url",
     "NavigationPreloadManager",
     "NavigationPreloadManager.prototype",
     "NavigationPreloadManager.prototype.disable",
     "NavigationPreloadManager.prototype.enable",
     "NavigationPreloadManager.prototype.getState",
     "NavigationPreloadManager.prototype.setHeaderValue",
+    "NavigationTransition",
+    "NavigationTransition.prototype",
+    "NavigationTransition.prototype.finished",
+    "NavigationTransition.prototype.from",
+    "NavigationTransition.prototype.navigationType",
     "Navigator",
     "Navigator.prototype",
     "Navigator.prototype.appCodeName",
@@ -3181,6 +3249,7 @@
     "Option.prototype.constructor.prototype.ariaExpanded",
     "Option.prototype.constructor.prototype.ariaHasPopup",
     "Option.prototype.constructor.prototype.ariaHidden",
+    "Option.prototype.constructor.prototype.ariaInvalid",
     "Option.prototype.constructor.prototype.ariaKeyShortcuts",
     "Option.prototype.constructor.prototype.ariaLabel",
     "Option.prototype.constructor.prototype.ariaLevel",
@@ -3287,6 +3356,7 @@
     "Option.prototype.constructor.prototype.hasPointerCapture",
     "Option.prototype.constructor.prototype.hidden",
     "Option.prototype.constructor.prototype.id",
+    "Option.prototype.constructor.prototype.inert",
     "Option.prototype.constructor.prototype.innerHTML",
     "Option.prototype.constructor.prototype.innerText",
     "Option.prototype.constructor.prototype.inputMode",
@@ -3313,6 +3383,7 @@
     "Option.prototype.constructor.prototype.onauxclick",
     "Option.prototype.constructor.prototype.onbeforecopy",
     "Option.prototype.constructor.prototype.onbeforecut",
+    "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
     "Option.prototype.constructor.prototype.onbeforexrselect",
     "Option.prototype.constructor.prototype.onblur",
@@ -4903,6 +4974,7 @@
     "SVGViewElement.prototype.onanimationiteration",
     "SVGViewElement.prototype.onanimationstart",
     "SVGViewElement.prototype.onauxclick",
+    "SVGViewElement.prototype.onbeforematch",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
     "SVGViewElement.prototype.oncancel",
@@ -6601,6 +6673,7 @@
     "XMLDocument.prototype.onauxclick",
     "XMLDocument.prototype.onbeforecopy",
     "XMLDocument.prototype.onbeforecut",
+    "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
     "XMLDocument.prototype.onbeforexrselect",
     "XMLDocument.prototype.onblur",
@@ -7077,6 +7150,7 @@
     "isFinite",
     "isNaN",
     "isSecureContext",
+    "launchQueue",
     "length",
     "localStorage",
     "location",
@@ -7086,6 +7160,7 @@
     "moveBy",
     "moveTo",
     "name",
+    "navigation",
     "navigator",
     "offscreenBuffering",
     "onabort",
@@ -7096,6 +7171,7 @@
     "onappinstalled",
     "onauxclick",
     "onbeforeinstallprompt",
+    "onbeforematch",
     "onbeforeprint",
     "onbeforeunload",
     "onbeforexrselect",
```

  
#### 101.0.4951.64 (`2022-5-10`) 
No browser API changes.

  
#### 101.0.4951.54 (`2022-5-2`) 
No browser API changes.

  
#### 101.0.4951.41 (`2022-4-26`) ⚡
Added 11 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_100.0.4896.127_to_101.0.4951.41.diff), [json](./browser_apis/chrome-stable_100.0.4896.127_to_101.0.4951.41.json), [full list](./browser_apis/chrome-stable_101.0.4951.41.json))
 ```diff
--- ./browser_apis/chrome-stable_100.0.4896.127.json	2022-07-12 01:38:07.447064582 +0000
+++ ./browser_apis/chrome-stable_101.0.4951.41.json	2022-07-12 01:38:07.451064632 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "100.0.4896.127",
-  "browserApiCount": 7364,
+  "version": "101.0.4951.41",
+  "browserApiCount": 7375,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -460,6 +460,12 @@
     "CSSFontFaceRule",
     "CSSFontFaceRule.prototype",
     "CSSFontFaceRule.prototype.style",
+    "CSSFontPaletteValuesRule",
+    "CSSFontPaletteValuesRule.prototype",
+    "CSSFontPaletteValuesRule.prototype.basePalette",
+    "CSSFontPaletteValuesRule.prototype.fontFamily",
+    "CSSFontPaletteValuesRule.prototype.name",
+    "CSSFontPaletteValuesRule.prototype.overrideColors",
     "CSSImageValue",
     "CSSImageValue.prototype",
     "CSSImportRule",
@@ -1765,6 +1771,7 @@
     "HTMLLinkElement.prototype.charset",
     "HTMLLinkElement.prototype.crossOrigin",
     "HTMLLinkElement.prototype.disabled",
+    "HTMLLinkElement.prototype.fetchpriority",
     "HTMLLinkElement.prototype.href",
     "HTMLLinkElement.prototype.hreflang",
     "HTMLLinkElement.prototype.imageSizes",
@@ -1913,6 +1920,7 @@
     "HTMLScriptElement.prototype.crossOrigin",
     "HTMLScriptElement.prototype.defer",
     "HTMLScriptElement.prototype.event",
+    "HTMLScriptElement.prototype.fetchpriority",
     "HTMLScriptElement.prototype.htmlFor",
     "HTMLScriptElement.prototype.integrity",
     "HTMLScriptElement.prototype.noModule",
@@ -2285,6 +2293,7 @@
     "Image.prototype.currentSrc",
     "Image.prototype.decode",
     "Image.prototype.decoding",
+    "Image.prototype.fetchpriority",
     "Image.prototype.height",
     "Image.prototype.hspace",
     "Image.prototype.isMap",
@@ -2651,6 +2660,7 @@
     "MediaCapabilities",
     "MediaCapabilities.prototype",
     "MediaCapabilities.prototype.decodingInfo",
+    "MediaCapabilities.prototype.encodingInfo",
     "MediaDevices",
     "MediaDevices.prototype",
     "MediaDevices.prototype.enumerateDevices",
@@ -5619,6 +5629,7 @@
     "USBDevice.prototype.deviceVersionMajor",
     "USBDevice.prototype.deviceVersionMinor",
     "USBDevice.prototype.deviceVersionSubminor",
+    "USBDevice.prototype.forget",
     "USBDevice.prototype.isochronousTransferIn",
     "USBDevice.prototype.isochronousTransferOut",
     "USBDevice.prototype.manufacturerName",
```

  
#### 100.0.4896.127 (`2022-4-14`) 
No browser API changes.

  
#### 100.0.4896.88 (`2022-4-11`) 
No browser API changes.

  
#### 100.0.4896.75 (`2022-4-4`) 
No browser API changes.

  
#### 100.0.4896.60 (`2022-3-29`) ⚡
Added 41 APIs, removed 18 (see: [diff](./browser_apis/chrome-stable_99.0.4844.84_to_100.0.4896.60.diff), [json](./browser_apis/chrome-stable_99.0.4844.84_to_100.0.4896.60.json), [full list](./browser_apis/chrome-stable_100.0.4896.60.json))
 ```diff
--- ./browser_apis/chrome-stable_99.0.4844.84.json	2022-07-12 01:38:07.483065033 +0000
+++ ./browser_apis/chrome-stable_100.0.4896.60.json	2022-07-12 01:38:07.451064632 +0000
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

  
#### 99.0.4844.82 (`2022-3-20`) 
No browser API changes.

  
#### 99.0.4844.74 (`2022-3-15`) 
No browser API changes.

  
#### 99.0.4844.51 (`2022-3-1`) ⚡
Added 49 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_98.0.4758.102_to_99.0.4844.51.diff), [json](./browser_apis/chrome-stable_98.0.4758.102_to_99.0.4844.51.json), [full list](./browser_apis/chrome-stable_99.0.4844.51.json))
 ```diff
--- ./browser_apis/chrome-stable_98.0.4758.102.json	2022-07-12 01:38:07.483065033 +0000
+++ ./browser_apis/chrome-stable_99.0.4844.51.json	2022-07-12 01:38:07.483065033 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "98.0.4758.102",
-  "browserApiCount": 7292,
+  "version": "99.0.4844.51",
+  "browserApiCount": 7341,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -464,6 +464,7 @@
     "CSSImportRule",
     "CSSImportRule.prototype",
     "CSSImportRule.prototype.href",
+    "CSSImportRule.prototype.layerName",
     "CSSImportRule.prototype.media",
     "CSSImportRule.prototype.styleSheet",
     "CSSKeyframeRule",
@@ -480,6 +481,12 @@
     "CSSKeywordValue",
     "CSSKeywordValue.prototype",
     "CSSKeywordValue.prototype.value",
+    "CSSLayerBlockRule",
+    "CSSLayerBlockRule.prototype",
+    "CSSLayerBlockRule.prototype.name",
+    "CSSLayerStatementRule",
+    "CSSLayerStatementRule.prototype",
+    "CSSLayerStatementRule.prototype.nameList",
     "CSSMathInvert",
     "CSSMathInvert.prototype",
     "CSSMathInvert.prototype.value",
@@ -660,6 +667,8 @@
     "CanvasCaptureMediaStreamTrack.prototype",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
+    "CanvasFilter",
+    "CanvasFilter.prototype",
     "CanvasGradient",
     "CanvasGradient.prototype",
     "CanvasGradient.prototype.addColorStop",
@@ -676,6 +685,7 @@
     "CanvasRenderingContext2D.prototype.clearRect",
     "CanvasRenderingContext2D.prototype.clip",
     "CanvasRenderingContext2D.prototype.closePath",
+    "CanvasRenderingContext2D.prototype.createConicGradient",
     "CanvasRenderingContext2D.prototype.createImageData",
     "CanvasRenderingContext2D.prototype.createLinearGradient",
     "CanvasRenderingContext2D.prototype.createPattern",
@@ -690,6 +700,9 @@
     "CanvasRenderingContext2D.prototype.fillText",
     "CanvasRenderingContext2D.prototype.filter",
     "CanvasRenderingContext2D.prototype.font",
+    "CanvasRenderingContext2D.prototype.fontKerning",
+    "CanvasRenderingContext2D.prototype.fontStretch",
+    "CanvasRenderingContext2D.prototype.fontVariantCaps",
     "CanvasRenderingContext2D.prototype.getContextAttributes",
     "CanvasRenderingContext2D.prototype.getImageData",
     "CanvasRenderingContext2D.prototype.getLineDash",
@@ -698,8 +711,10 @@
     "CanvasRenderingContext2D.prototype.globalCompositeOperation",
     "CanvasRenderingContext2D.prototype.imageSmoothingEnabled",
     "CanvasRenderingContext2D.prototype.imageSmoothingQuality",
+    "CanvasRenderingContext2D.prototype.isContextLost",
     "CanvasRenderingContext2D.prototype.isPointInPath",
     "CanvasRenderingContext2D.prototype.isPointInStroke",
+    "CanvasRenderingContext2D.prototype.letterSpacing",
     "CanvasRenderingContext2D.prototype.lineCap",
     "CanvasRenderingContext2D.prototype.lineDashOffset",
     "CanvasRenderingContext2D.prototype.lineJoin",
@@ -711,9 +726,11 @@
     "CanvasRenderingContext2D.prototype.putImageData",
     "CanvasRenderingContext2D.prototype.quadraticCurveTo",
     "CanvasRenderingContext2D.prototype.rect",
+    "CanvasRenderingContext2D.prototype.reset",
     "CanvasRenderingContext2D.prototype.resetTransform",
     "CanvasRenderingContext2D.prototype.restore",
     "CanvasRenderingContext2D.prototype.rotate",
+    "CanvasRenderingContext2D.prototype.roundRect",
     "CanvasRenderingContext2D.prototype.save",
     "CanvasRenderingContext2D.prototype.scale",
     "CanvasRenderingContext2D.prototype.setLineDash",
@@ -728,8 +745,10 @@
     "CanvasRenderingContext2D.prototype.strokeText",
     "CanvasRenderingContext2D.prototype.textAlign",
     "CanvasRenderingContext2D.prototype.textBaseline",
+    "CanvasRenderingContext2D.prototype.textRendering",
     "CanvasRenderingContext2D.prototype.transform",
     "CanvasRenderingContext2D.prototype.translate",
+    "CanvasRenderingContext2D.prototype.wordSpacing",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -1686,6 +1705,7 @@
     "HTMLInputElement.prototype.setCustomValidity",
     "HTMLInputElement.prototype.setRangeText",
     "HTMLInputElement.prototype.setSelectionRange",
+    "HTMLInputElement.prototype.showPicker",
     "HTMLInputElement.prototype.size",
     "HTMLInputElement.prototype.src",
     "HTMLInputElement.prototype.step",
@@ -2381,17 +2401,24 @@
     "Intl.Locale.prototype",
     "Intl.Locale.prototype.baseName",
     "Intl.Locale.prototype.calendar",
+    "Intl.Locale.prototype.calendars",
     "Intl.Locale.prototype.caseFirst",
     "Intl.Locale.prototype.collation",
+    "Intl.Locale.prototype.collations",
     "Intl.Locale.prototype.hourCycle",
+    "Intl.Locale.prototype.hourCycles",
     "Intl.Locale.prototype.language",
     "Intl.Locale.prototype.maximize",
     "Intl.Locale.prototype.minimize",
     "Intl.Locale.prototype.numberingSystem",
+    "Intl.Locale.prototype.numberingSystems",
     "Intl.Locale.prototype.numeric",
     "Intl.Locale.prototype.region",
     "Intl.Locale.prototype.script",
+    "Intl.Locale.prototype.textInfo",
+    "Intl.Locale.prototype.timeZones",
     "Intl.Locale.prototype.toString",
+    "Intl.Locale.prototype.weekInfo",
     "Intl.NumberFormat",
     "Intl.NumberFormat.prototype",
     "Intl.NumberFormat.prototype.format",
@@ -2415,6 +2442,7 @@
     "Intl.Segmenter.prototype.segment",
     "Intl.Segmenter.supportedLocalesOf",
     "Intl.getCanonicalLocales",
+    "Intl.supportedValuesOf",
     "Intl.v8BreakIterator",
     "Intl.v8BreakIterator.prototype",
     "Intl.v8BreakIterator.prototype.adoptText",
@@ -3040,6 +3068,8 @@
     "OffscreenCanvas.prototype.convertToBlob",
     "OffscreenCanvas.prototype.getContext",
     "OffscreenCanvas.prototype.height",
+    "OffscreenCanvas.prototype.oncontextlost",
+    "OffscreenCanvas.prototype.oncontextrestored",
     "OffscreenCanvas.prototype.transferToImageBitmap",
     "OffscreenCanvas.prototype.width",
     "OffscreenCanvasRenderingContext2D",
@@ -3052,6 +3082,7 @@
     "OffscreenCanvasRenderingContext2D.prototype.clearRect",
     "OffscreenCanvasRenderingContext2D.prototype.clip",
     "OffscreenCanvasRenderingContext2D.prototype.closePath",
+    "OffscreenCanvasRenderingContext2D.prototype.createConicGradient",
     "OffscreenCanvasRenderingContext2D.prototype.createImageData",
     "OffscreenCanvasRenderingContext2D.prototype.createLinearGradient",
     "OffscreenCanvasRenderingContext2D.prototype.createPattern",
@@ -3065,6 +3096,9 @@
     "OffscreenCanvasRenderingContext2D.prototype.fillText",
     "OffscreenCanvasRenderingContext2D.prototype.filter",
     "OffscreenCanvasRenderingContext2D.prototype.font",
+    "OffscreenCanvasRenderingContext2D.prototype.fontKerning",
+    "OffscreenCanvasRenderingContext2D.prototype.fontStretch",
+    "OffscreenCanvasRenderingContext2D.prototype.fontVariantCaps",
     "OffscreenCanvasRenderingContext2D.prototype.getImageData",
     "OffscreenCanvasRenderingContext2D.prototype.getLineDash",
     "OffscreenCanvasRenderingContext2D.prototype.getTransform",
@@ -3072,8 +3106,10 @@
     "OffscreenCanvasRenderingContext2D.prototype.globalCompositeOperation",
     "OffscreenCanvasRenderingContext2D.prototype.imageSmoothingEnabled",
     "OffscreenCanvasRenderingContext2D.prototype.imageSmoothingQuality",
+    "OffscreenCanvasRenderingContext2D.prototype.isContextLost",
     "OffscreenCanvasRenderingContext2D.prototype.isPointInPath",
     "OffscreenCanvasRenderingContext2D.prototype.isPointInStroke",
+    "OffscreenCanvasRenderingContext2D.prototype.letterSpacing",
     "OffscreenCanvasRenderingContext2D.prototype.lineCap",
     "OffscreenCanvasRenderingContext2D.prototype.lineDashOffset",
     "OffscreenCanvasRenderingContext2D.prototype.lineJoin",
@@ -3085,9 +3121,11 @@
     "OffscreenCanvasRenderingContext2D.prototype.putImageData",
     "OffscreenCanvasRenderingContext2D.prototype.quadraticCurveTo",
     "OffscreenCanvasRenderingContext2D.prototype.rect",
+    "OffscreenCanvasRenderingContext2D.prototype.reset",
     "OffscreenCanvasRenderingContext2D.prototype.resetTransform",
     "OffscreenCanvasRenderingContext2D.prototype.restore",
     "OffscreenCanvasRenderingContext2D.prototype.rotate",
+    "OffscreenCanvasRenderingContext2D.prototype.roundRect",
     "OffscreenCanvasRenderingContext2D.prototype.save",
     "OffscreenCanvasRenderingContext2D.prototype.scale",
     "OffscreenCanvasRenderingContext2D.prototype.setLineDash",
@@ -3102,8 +3140,10 @@
     "OffscreenCanvasRenderingContext2D.prototype.strokeText",
     "OffscreenCanvasRenderingContext2D.prototype.textAlign",
     "OffscreenCanvasRenderingContext2D.prototype.textBaseline",
+    "OffscreenCanvasRenderingContext2D.prototype.textRendering",
     "OffscreenCanvasRenderingContext2D.prototype.transform",
     "OffscreenCanvasRenderingContext2D.prototype.translate",
+    "OffscreenCanvasRenderingContext2D.prototype.wordSpacing",
     "Option",
     "Option.prototype",
     "Option.prototype.constructor",
@@ -3266,7 +3306,9 @@
     "Option.prototype.constructor.prototype.onchange",
     "Option.prototype.constructor.prototype.onclick",
     "Option.prototype.constructor.prototype.onclose",
+    "Option.prototype.constructor.prototype.oncontextlost",
     "Option.prototype.constructor.prototype.oncontextmenu",
+    "Option.prototype.constructor.prototype.oncontextrestored",
     "Option.prototype.constructor.prototype.oncopy",
     "Option.prototype.constructor.prototype.oncuechange",
     "Option.prototype.constructor.prototype.oncut",
@@ -3454,6 +3496,7 @@
     "Path2D.prototype.moveTo",
     "Path2D.prototype.quadraticCurveTo",
     "Path2D.prototype.rect",
+    "Path2D.prototype.roundRect",
     "PaymentAddress",
     "PaymentAddress.prototype",
     "PaymentAddress.prototype.addressLine",
@@ -4852,7 +4895,9 @@
     "SVGViewElement.prototype.onchange",
     "SVGViewElement.prototype.onclick",
     "SVGViewElement.prototype.onclose",
+    "SVGViewElement.prototype.oncontextlost",
     "SVGViewElement.prototype.oncontextmenu",
+    "SVGViewElement.prototype.oncontextrestored",
     "SVGViewElement.prototype.oncopy",
     "SVGViewElement.prototype.oncuechange",
     "SVGViewElement.prototype.oncut",
@@ -6532,7 +6577,9 @@
     "XMLDocument.prototype.onchange",
     "XMLDocument.prototype.onclick",
     "XMLDocument.prototype.onclose",
+    "XMLDocument.prototype.oncontextlost",
     "XMLDocument.prototype.oncontextmenu",
+    "XMLDocument.prototype.oncontextrestored",
     "XMLDocument.prototype.oncopy",
     "XMLDocument.prototype.oncuechange",
     "XMLDocument.prototype.oncut",
@@ -7025,7 +7072,9 @@
     "onchange",
     "onclick",
     "onclose",
+    "oncontextlost",
     "oncontextmenu",
+    "oncontextrestored",
     "oncuechange",
     "ondblclick",
     "ondevicemotion",
```

  
#### 98.0.4758.102 (`2022-2-14`) 
No browser API changes.

  
#### 98.0.4758.80 (`2022-2-1`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_97.0.4692.99_to_98.0.4758.80.diff), [json](./browser_apis/chrome-stable_97.0.4692.99_to_98.0.4758.80.json), [full list](./browser_apis/chrome-stable_98.0.4758.80.json))
 ```diff
--- ./browser_apis/chrome-stable_97.0.4692.99.json	2022-07-12 01:38:07.479064983 +0000
+++ ./browser_apis/chrome-stable_98.0.4758.80.json	2022-07-12 01:38:07.483065033 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "97.0.4692.99",
-  "browserApiCount": 7288,
+  "version": "98.0.4758.80",
+  "browserApiCount": 7292,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -12,6 +12,7 @@
     "AbortSignal.prototype",
     "AbortSignal.prototype.aborted",
     "AbortSignal.prototype.onabort",
+    "AbortSignal.prototype.reason",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -3774,6 +3775,7 @@
     "PublicKeyCredential",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
     "PublicKeyCredential.prototype",
+    "PublicKeyCredential.prototype.authenticatorAttachment",
     "PublicKeyCredential.prototype.getClientExtensionResults",
     "PublicKeyCredential.prototype.rawId",
     "PublicKeyCredential.prototype.response",
@@ -6421,6 +6423,7 @@
     "WritableStreamDefaultController",
     "WritableStreamDefaultController.prototype",
     "WritableStreamDefaultController.prototype.error",
+    "WritableStreamDefaultController.prototype.signal",
     "WritableStreamDefaultWriter",
     "WritableStreamDefaultWriter.prototype",
     "WritableStreamDefaultWriter.prototype.abort",
@@ -7159,6 +7162,7 @@
     "status",
     "statusbar",
     "stop",
+    "structuredClone",
     "styleMedia",
     "toolbar",
     "top",
```

  
#### 97.0.4692.99 (`2022-1-19`) 
No browser API changes.

  
#### 97.0.4692.71 (`2022-1-4`) ⚡
Added 40 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_96.0.4664.110_to_97.0.4692.71.diff), [json](./browser_apis/chrome-stable_96.0.4664.110_to_97.0.4692.71.json), [full list](./browser_apis/chrome-stable_97.0.4692.71.json))
 ```diff
--- ./browser_apis/chrome-stable_96.0.4664.110.json	2022-07-12 01:38:07.479064983 +0000
+++ ./browser_apis/chrome-stable_97.0.4692.71.json	2022-07-12 01:38:07.479064983 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "96.0.4664.110",
-  "browserApiCount": 7248,
+  "version": "97.0.4692.71",
+  "browserApiCount": 7288,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -94,6 +94,8 @@
     "Array.prototype.filter",
     "Array.prototype.find",
     "Array.prototype.findIndex",
+    "Array.prototype.findLast",
+    "Array.prototype.findLastIndex",
     "Array.prototype.flat",
     "Array.prototype.flatMap",
     "Array.prototype.forEach",
@@ -3321,11 +3323,13 @@
     "Option.prototype.constructor.prototype.onresize",
     "Option.prototype.constructor.prototype.onscroll",
     "Option.prototype.constructor.prototype.onsearch",
+    "Option.prototype.constructor.prototype.onsecuritypolicyviolation",
     "Option.prototype.constructor.prototype.onseeked",
     "Option.prototype.constructor.prototype.onseeking",
     "Option.prototype.constructor.prototype.onselect",
     "Option.prototype.constructor.prototype.onselectionchange",
     "Option.prototype.constructor.prototype.onselectstart",
+    "Option.prototype.constructor.prototype.onslotchange",
     "Option.prototype.constructor.prototype.onstalled",
     "Option.prototype.constructor.prototype.onsubmit",
     "Option.prototype.constructor.prototype.onsuspend",
@@ -3648,6 +3652,7 @@
     "PeriodicWave.prototype",
     "PermissionStatus",
     "PermissionStatus.prototype",
+    "PermissionStatus.prototype.name",
     "PermissionStatus.prototype.onchange",
     "PermissionStatus.prototype.state",
     "Permissions",
@@ -4900,11 +4905,13 @@
     "SVGViewElement.prototype.onreset",
     "SVGViewElement.prototype.onresize",
     "SVGViewElement.prototype.onscroll",
+    "SVGViewElement.prototype.onsecuritypolicyviolation",
     "SVGViewElement.prototype.onseeked",
     "SVGViewElement.prototype.onseeking",
     "SVGViewElement.prototype.onselect",
     "SVGViewElement.prototype.onselectionchange",
     "SVGViewElement.prototype.onselectstart",
+    "SVGViewElement.prototype.onslotchange",
     "SVGViewElement.prototype.onstalled",
     "SVGViewElement.prototype.onsubmit",
     "SVGViewElement.prototype.onsuspend",
@@ -5087,6 +5094,7 @@
     "ShadowRoot.prototype.innerHTML",
     "ShadowRoot.prototype.lastElementChild",
     "ShadowRoot.prototype.mode",
+    "ShadowRoot.prototype.onslotchange",
     "ShadowRoot.prototype.pictureInPictureElement",
     "ShadowRoot.prototype.pointerLockElement",
     "ShadowRoot.prototype.prepend",
@@ -5615,6 +5623,8 @@
     "Uint8Array.prototype.filter",
     "Uint8Array.prototype.find",
     "Uint8Array.prototype.findIndex",
+    "Uint8Array.prototype.findLast",
+    "Uint8Array.prototype.findLastIndex",
     "Uint8Array.prototype.forEach",
     "Uint8Array.prototype.includes",
     "Uint8Array.prototype.indexOf",
@@ -6307,6 +6317,33 @@
     "WebSocket.prototype.readyState",
     "WebSocket.prototype.send",
     "WebSocket.prototype.url",
+    "WebTransport",
+    "WebTransport.prototype",
+    "WebTransport.prototype.close",
+    "WebTransport.prototype.closed",
+    "WebTransport.prototype.createBidirectionalStream",
+    "WebTransport.prototype.createUnidirectionalStream",
+    "WebTransport.prototype.datagrams",
+    "WebTransport.prototype.incomingBidirectionalStreams",
+    "WebTransport.prototype.incomingUnidirectionalStreams",
+    "WebTransport.prototype.ready",
+    "WebTransportBidirectionalStream",
+    "WebTransportBidirectionalStream.prototype",
+    "WebTransportBidirectionalStream.prototype.readable",
+    "WebTransportBidirectionalStream.prototype.writable",
+    "WebTransportDatagramDuplexStream",
+    "WebTransportDatagramDuplexStream.prototype",
+    "WebTransportDatagramDuplexStream.prototype.incomingHighWaterMark",
+    "WebTransportDatagramDuplexStream.prototype.incomingMaxAge",
+    "WebTransportDatagramDuplexStream.prototype.maxDatagramSize",
+    "WebTransportDatagramDuplexStream.prototype.outgoingHighWaterMark",
+    "WebTransportDatagramDuplexStream.prototype.outgoingMaxAge",
+    "WebTransportDatagramDuplexStream.prototype.readable",
+    "WebTransportDatagramDuplexStream.prototype.writable",
+    "WebTransportError",
+    "WebTransportError.prototype",
+    "WebTransportError.prototype.source",
+    "WebTransportError.prototype.streamErrorCode",
     "WheelEvent",
     "WheelEvent.prototype",
     "WheelEvent.prototype.altKey",
@@ -6561,6 +6598,7 @@
     "XMLDocument.prototype.onselect",
     "XMLDocument.prototype.onselectionchange",
     "XMLDocument.prototype.onselectstart",
+    "XMLDocument.prototype.onslotchange",
     "XMLDocument.prototype.onstalled",
     "XMLDocument.prototype.onsubmit",
     "XMLDocument.prototype.onsuspend",
@@ -7050,11 +7088,13 @@
     "onresize",
     "onscroll",
     "onsearch",
+    "onsecuritypolicyviolation",
     "onseeked",
     "onseeking",
     "onselect",
     "onselectionchange",
     "onselectstart",
+    "onslotchange",
     "onstalled",
     "onstorage",
     "onsubmit",
```

  
#### 96.0.4664.110 (`2021-12-13`) 
No browser API changes.

  
#### 96.0.4664.93 (`2021-12-6`) 
No browser API changes.

  
#### 96.0.4664.45 (`2021-11-15`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_95.0.4638.69_to_96.0.4664.45.diff), [json](./browser_apis/chrome-stable_95.0.4638.69_to_96.0.4664.45.json), [full list](./browser_apis/chrome-stable_96.0.4664.45.json))
 ```diff
--- ./browser_apis/chrome-stable_95.0.4638.69.json	2022-07-12 01:38:07.479064983 +0000
+++ ./browser_apis/chrome-stable_96.0.4664.45.json	2022-07-12 01:38:07.479064983 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "95.0.4638.69",
-  "browserApiCount": 7246,
+  "version": "96.0.4664.45",
+  "browserApiCount": 7248,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -1873,6 +1873,7 @@
     "HTMLScriptElement.prototype.src",
     "HTMLScriptElement.prototype.text",
     "HTMLScriptElement.prototype.type",
+    "HTMLScriptElement.supports",
     "HTMLSelectElement",
     "HTMLSelectElement.prototype",
     "HTMLSelectElement.prototype.add",
@@ -3541,6 +3542,7 @@
     "PerformanceEventTiming",
     "PerformanceEventTiming.prototype",
     "PerformanceEventTiming.prototype.cancelable",
+    "PerformanceEventTiming.prototype.interactionId",
     "PerformanceEventTiming.prototype.processingEnd",
     "PerformanceEventTiming.prototype.processingStart",
     "PerformanceEventTiming.prototype.target",
```

  
#### 95.0.4638.69 (`2021-10-28`) 
No browser API changes.

  
#### 95.0.4638.54 (`2021-10-19`) ⚡
Added 23 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_94.0.4606.81_to_95.0.4638.54.diff), [json](./browser_apis/chrome-stable_94.0.4606.81_to_95.0.4638.54.json), [full list](./browser_apis/chrome-stable_95.0.4638.54.json))
 ```diff
--- ./browser_apis/chrome-stable_94.0.4606.81.json	2022-07-12 01:38:07.475064933 +0000
+++ ./browser_apis/chrome-stable_95.0.4638.54.json	2022-07-12 01:38:07.479064983 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "94.0.4606.81",
-  "browserApiCount": 7223,
+  "version": "95.0.4638.54",
+  "browserApiCount": 7246,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -1165,6 +1165,9 @@
     "External.prototype",
     "External.prototype.AddSearchProvider",
     "External.prototype.IsSearchProviderInstalled",
+    "EyeDropper",
+    "EyeDropper.prototype",
+    "EyeDropper.prototype.open",
     "FeaturePolicy",
     "FeaturePolicy.prototype",
     "FeaturePolicy.prototype.allowedFeatures",
@@ -5474,6 +5477,18 @@
     "TypeError.prototype",
     "URIError",
     "URIError.prototype",
+    "URLPattern",
+    "URLPattern.prototype",
+    "URLPattern.prototype.exec",
+    "URLPattern.prototype.hash",
+    "URLPattern.prototype.hostname",
+    "URLPattern.prototype.password",
+    "URLPattern.prototype.pathname",
+    "URLPattern.prototype.port",
+    "URLPattern.prototype.protocol",
+    "URLPattern.prototype.search",
+    "URLPattern.prototype.test",
+    "URLPattern.prototype.username",
     "URLSearchParams",
     "URLSearchParams.prototype",
     "URLSearchParams.prototype.append",
@@ -5761,6 +5776,11 @@
     "WebAssembly",
     "WebAssembly.CompileError",
     "WebAssembly.CompileError.prototype",
+    "WebAssembly.Exception",
+    "WebAssembly.Exception.prototype",
+    "WebAssembly.Exception.prototype.constructor",
+    "WebAssembly.Exception.prototype.getArg",
+    "WebAssembly.Exception.prototype.is",
     "WebAssembly.Global",
     "WebAssembly.Global.prototype",
     "WebAssembly.Global.prototype.value",
@@ -5787,6 +5807,8 @@
     "WebAssembly.Table.prototype.grow",
     "WebAssembly.Table.prototype.length",
     "WebAssembly.Table.prototype.set",
+    "WebAssembly.Tag",
+    "WebAssembly.Tag.prototype",
     "WebAssembly.compile",
     "WebAssembly.compileStreaming",
     "WebAssembly.instantiate",
@@ -7067,6 +7089,7 @@
     "prompt",
     "queueMicrotask",
     "releaseEvents",
+    "reportError",
     "requestAnimationFrame",
     "requestIdleCallback",
     "resizeBy",
```

  
#### 94.0.4606.81 (`2021-10-7`) 
No browser API changes.

  
#### 94.0.4606.71 (`2021-9-30`) 
No browser API changes.

  
#### 94.0.4606.61 (`2021-9-24`) 
No browser API changes.

  
#### 94.0.4606.54 (`2021-9-21`) ⚡
Added 157 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_93.0.4577.82_to_94.0.4606.54.diff), [json](./browser_apis/chrome-stable_93.0.4577.82_to_94.0.4606.54.json), [full list](./browser_apis/chrome-stable_94.0.4606.54.json))
 ```diff
--- ./browser_apis/chrome-stable_93.0.4577.82.json	2022-07-12 01:38:07.475064933 +0000
+++ ./browser_apis/chrome-stable_94.0.4606.54.json	2022-07-12 01:38:07.475064933 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "93.0.4577.82",
-  "browserApiCount": 7066,
+  "version": "94.0.4606.54",
+  "browserApiCount": 7223,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -220,9 +220,41 @@
     "AudioContext.prototype.getOutputTimestamp",
     "AudioContext.prototype.resume",
     "AudioContext.prototype.suspend",
+    "AudioData",
+    "AudioData.prototype",
+    "AudioData.prototype.allocationSize",
+    "AudioData.prototype.clone",
+    "AudioData.prototype.close",
+    "AudioData.prototype.copyTo",
+    "AudioData.prototype.duration",
+    "AudioData.prototype.format",
+    "AudioData.prototype.numberOfChannels",
+    "AudioData.prototype.numberOfFrames",
+    "AudioData.prototype.sampleRate",
+    "AudioData.prototype.timestamp",
+    "AudioDecoder",
+    "AudioDecoder.isConfigSupported",
+    "AudioDecoder.prototype",
+    "AudioDecoder.prototype.close",
+    "AudioDecoder.prototype.configure",
+    "AudioDecoder.prototype.decode",
+    "AudioDecoder.prototype.decodeQueueSize",
+    "AudioDecoder.prototype.flush",
+    "AudioDecoder.prototype.reset",
+    "AudioDecoder.prototype.state",
     "AudioDestinationNode",
     "AudioDestinationNode.prototype",
     "AudioDestinationNode.prototype.maxChannelCount",
+    "AudioEncoder",
+    "AudioEncoder.isConfigSupported",
+    "AudioEncoder.prototype",
+    "AudioEncoder.prototype.close",
+    "AudioEncoder.prototype.configure",
+    "AudioEncoder.prototype.encode",
+    "AudioEncoder.prototype.encodeQueueSize",
+    "AudioEncoder.prototype.flush",
+    "AudioEncoder.prototype.reset",
+    "AudioEncoder.prototype.state",
     "AudioListener",
     "AudioListener.prototype",
     "AudioListener.prototype.forwardX",
@@ -984,6 +1016,11 @@
     "DelayNode",
     "DelayNode.prototype",
     "DelayNode.prototype.delayTime",
+    "DelegatedInkTrailPresenter",
+    "DelegatedInkTrailPresenter.prototype",
+    "DelegatedInkTrailPresenter.prototype.expectedImprovement",
+    "DelegatedInkTrailPresenter.prototype.presentationArea",
+    "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1079,6 +1116,20 @@
     "ElementInternals.prototype.validationMessage",
     "ElementInternals.prototype.validity",
     "ElementInternals.prototype.willValidate",
+    "EncodedAudioChunk",
+    "EncodedAudioChunk.prototype",
+    "EncodedAudioChunk.prototype.byteLength",
+    "EncodedAudioChunk.prototype.copyTo",
+    "EncodedAudioChunk.prototype.duration",
+    "EncodedAudioChunk.prototype.timestamp",
+    "EncodedAudioChunk.prototype.type",
+    "EncodedVideoChunk",
+    "EncodedVideoChunk.prototype",
+    "EncodedVideoChunk.prototype.byteLength",
+    "EncodedVideoChunk.prototype.copyTo",
+    "EncodedVideoChunk.prototype.duration",
+    "EncodedVideoChunk.prototype.timestamp",
+    "EncodedVideoChunk.prototype.type",
     "Error",
     "Error.captureStackTrace",
     "Error.prototype",
@@ -2223,6 +2274,31 @@
     "ImageData.prototype.data",
     "ImageData.prototype.height",
     "ImageData.prototype.width",
+    "ImageDecoder",
+    "ImageDecoder.isTypeSupported",
+    "ImageDecoder.prototype",
+    "ImageDecoder.prototype.close",
+    "ImageDecoder.prototype.complete",
+    "ImageDecoder.prototype.completed",
+    "ImageDecoder.prototype.decode",
+    "ImageDecoder.prototype.reset",
+    "ImageDecoder.prototype.tracks",
+    "ImageDecoder.prototype.type",
+    "ImageTrack",
+    "ImageTrack.prototype",
+    "ImageTrack.prototype.animated",
+    "ImageTrack.prototype.frameCount",
+    "ImageTrack.prototype.repetitionCount",
+    "ImageTrack.prototype.selected",
+    "ImageTrackList",
+    "ImageTrackList.prototype",
+    "ImageTrackList.prototype.length",
+    "ImageTrackList.prototype.ready",
+    "ImageTrackList.prototype.selectedIndex",
+    "ImageTrackList.prototype.selectedTrack",
+    "Ink",
+    "Ink.prototype",
+    "Ink.prototype.requestPresenter",
     "InputDeviceCapabilities",
     "InputDeviceCapabilities.prototype",
     "InputDeviceCapabilities.prototype.firesTouchEvents",
@@ -2668,6 +2744,12 @@
     "MediaStreamTrackEvent",
     "MediaStreamTrackEvent.prototype",
     "MediaStreamTrackEvent.prototype.track",
+    "MediaStreamTrackGenerator",
+    "MediaStreamTrackGenerator.prototype",
+    "MediaStreamTrackGenerator.prototype.writable",
+    "MediaStreamTrackProcessor",
+    "MediaStreamTrackProcessor.prototype",
+    "MediaStreamTrackProcessor.prototype.readable",
     "MessageChannel",
     "MessageChannel.prototype",
     "MessageChannel.prototype.port1",
@@ -2753,6 +2835,7 @@
     "Navigator.prototype.getUserMedia",
     "Navigator.prototype.hardwareConcurrency",
     "Navigator.prototype.hid",
+    "Navigator.prototype.ink",
     "Navigator.prototype.javaEnabled",
     "Navigator.prototype.keyboard",
     "Navigator.prototype.language",
@@ -2765,6 +2848,7 @@
     "Navigator.prototype.mediaSession",
     "Navigator.prototype.mimeTypes",
     "Navigator.prototype.onLine",
+    "Navigator.prototype.pdfViewerEnabled",
     "Navigator.prototype.permissions",
     "Navigator.prototype.platform",
     "Navigator.prototype.plugins",
@@ -2788,6 +2872,7 @@
     "Navigator.prototype.vendor",
     "Navigator.prototype.vendorSub",
     "Navigator.prototype.vibrate",
+    "Navigator.prototype.virtualKeyboard",
     "Navigator.prototype.wakeLock",
     "Navigator.prototype.webdriver",
     "Navigator.prototype.webkitGetUserMedia",
@@ -3295,6 +3380,7 @@
     "Option.prototype.constructor.prototype.title",
     "Option.prototype.constructor.prototype.toggleAttribute",
     "Option.prototype.constructor.prototype.translate",
+    "Option.prototype.constructor.prototype.virtualKeyboardPolicy",
     "Option.prototype.constructor.prototype.webkitMatchesSelector",
     "Option.prototype.constructor.prototype.webkitRequestFullScreen",
     "Option.prototype.constructor.prototype.webkitRequestFullscreen",
@@ -3648,6 +3734,11 @@
     "ProcessingInstruction.prototype",
     "ProcessingInstruction.prototype.sheet",
     "ProcessingInstruction.prototype.target",
+    "Profiler",
+    "Profiler.prototype",
+    "Profiler.prototype.sampleInterval",
+    "Profiler.prototype.stop",
+    "Profiler.prototype.stopped",
     "ProgressEvent",
     "ProgressEvent.prototype",
     "ProgressEvent.prototype.lengthComputable",
@@ -4832,6 +4923,9 @@
     "SVGViewElement.prototype.viewBox",
     "SVGViewElement.prototype.viewportElement",
     "SVGViewElement.prototype.zoomAndPan",
+    "Scheduler",
+    "Scheduler.prototype",
+    "Scheduler.prototype.postTask",
     "Scheduling",
     "Scheduling.prototype",
     "Scheduling.prototype.isInputPending",
@@ -5201,6 +5295,16 @@
     "TaskAttributionTiming.prototype.name",
     "TaskAttributionTiming.prototype.startTime",
     "TaskAttributionTiming.prototype.toJSON",
+    "TaskController",
+    "TaskController.prototype",
+    "TaskController.prototype.setPriority",
+    "TaskPriorityChangeEvent",
+    "TaskPriorityChangeEvent.prototype",
+    "TaskPriorityChangeEvent.prototype.previousPriority",
+    "TaskSignal",
+    "TaskSignal.prototype",
+    "TaskSignal.prototype.onprioritychange",
+    "TaskSignal.prototype.priority",
     "Text",
     "Text.prototype",
     "Text.prototype.after",
@@ -5549,12 +5653,64 @@
     "ValidityState.prototype.typeMismatch",
     "ValidityState.prototype.valid",
     "ValidityState.prototype.valueMissing",
+    "VideoColorSpace",
+    "VideoColorSpace.prototype",
+    "VideoColorSpace.prototype.fullRange",
+    "VideoColorSpace.prototype.matrix",
+    "VideoColorSpace.prototype.primaries",
+    "VideoColorSpace.prototype.toJSON",
+    "VideoColorSpace.prototype.transfer",
+    "VideoDecoder",
+    "VideoDecoder.isConfigSupported",
+    "VideoDecoder.prototype",
+    "VideoDecoder.prototype.close",
+    "VideoDecoder.prototype.configure",
+    "VideoDecoder.prototype.decode",
+    "VideoDecoder.prototype.decodeQueueSize",
+    "VideoDecoder.prototype.flush",
+    "VideoDecoder.prototype.reset",
+    "VideoDecoder.prototype.state",
+    "VideoEncoder",
+    "VideoEncoder.isConfigSupported",
+    "VideoEncoder.prototype",
+    "VideoEncoder.prototype.close",
+    "VideoEncoder.prototype.configure",
+    "VideoEncoder.prototype.encode",
+    "VideoEncoder.prototype.encodeQueueSize",
+    "VideoEncoder.prototype.flush",
+    "VideoEncoder.prototype.reset",
+    "VideoEncoder.prototype.state",
+    "VideoFrame",
+    "VideoFrame.prototype",
+    "VideoFrame.prototype.allocationSize",
+    "VideoFrame.prototype.clone",
+    "VideoFrame.prototype.close",
+    "VideoFrame.prototype.codedHeight",
+    "VideoFrame.prototype.codedRect",
+    "VideoFrame.prototype.codedWidth",
+    "VideoFrame.prototype.colorSpace",
+    "VideoFrame.prototype.copyTo",
+    "VideoFrame.prototype.displayHeight",
+    "VideoFrame.prototype.displayWidth",
+    "VideoFrame.prototype.duration",
+    "VideoFrame.prototype.format",
+    "VideoFrame.prototype.timestamp",
+    "VideoFrame.prototype.visibleRect",
     "VideoPlaybackQuality",
     "VideoPlaybackQuality.prototype",
     "VideoPlaybackQuality.prototype.corruptedVideoFrames",
     "VideoPlaybackQuality.prototype.creationTime",
     "VideoPlaybackQuality.prototype.droppedVideoFrames",
     "VideoPlaybackQuality.prototype.totalVideoFrames",
+    "VirtualKeyboard",
+    "VirtualKeyboard.prototype",
+    "VirtualKeyboard.prototype.boundingRect",
+    "VirtualKeyboard.prototype.hide",
+    "VirtualKeyboard.prototype.ongeometrychange",
+    "VirtualKeyboard.prototype.overlaysContent",
+    "VirtualKeyboard.prototype.show",
+    "VirtualKeyboardGeometryChangeEvent",
+    "VirtualKeyboardGeometryChangeEvent.prototype",
     "VisualViewport",
     "VisualViewport.prototype",
     "VisualViewport.prototype.height",
@@ -6915,6 +7071,7 @@
     "requestIdleCallback",
     "resizeBy",
     "resizeTo",
+    "scheduler",
     "screen",
     "screenLeft",
     "screenTop",
```

  
#### 93.0.4577.82 (`2021-9-13`) 
No browser API changes.

  
#### 93.0.4577.63 (`2021-8-31`) ⚡
Added 13 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_92.0.4515.159_to_93.0.4577.63.diff), [json](./browser_apis/chrome-stable_92.0.4515.159_to_93.0.4577.63.json), [full list](./browser_apis/chrome-stable_93.0.4577.63.json))
 ```diff
--- ./browser_apis/chrome-stable_92.0.4515.159.json	2022-07-12 01:38:07.475064933 +0000
+++ ./browser_apis/chrome-stable_93.0.4577.63.json	2022-07-12 01:38:07.475064933 +0000
@@ -1,13 +1,14 @@
 {
   "browser": "chrome-stable",
-  "version": "92.0.4515.159",
-  "browserApiCount": 7053,
+  "version": "93.0.4577.63",
+  "browserApiCount": 7066,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
     "AbortController.prototype.abort",
     "AbortController.prototype.signal",
     "AbortSignal",
+    "AbortSignal.abort",
     "AbortSignal.prototype",
     "AbortSignal.prototype.aborted",
     "AbortSignal.prototype.onabort",
@@ -1703,6 +1704,7 @@
     "HTMLMetaElement.prototype",
     "HTMLMetaElement.prototype.content",
     "HTMLMetaElement.prototype.httpEquiv",
+    "HTMLMetaElement.prototype.media",
     "HTMLMetaElement.prototype.name",
     "HTMLMetaElement.prototype.scheme",
     "HTMLMeterElement",
@@ -2618,6 +2620,8 @@
     "MediaSession.prototype.metadata",
     "MediaSession.prototype.playbackState",
     "MediaSession.prototype.setActionHandler",
+    "MediaSession.prototype.setCameraActive",
+    "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
     "MediaSource.isTypeSupported",
@@ -2799,6 +2803,8 @@
     "NavigatorUAData.prototype.brands",
     "NavigatorUAData.prototype.getHighEntropyValues",
     "NavigatorUAData.prototype.mobile",
+    "NavigatorUAData.prototype.platform",
+    "NavigatorUAData.prototype.toJSON",
     "NetworkInformation",
     "NetworkInformation.prototype",
     "NetworkInformation.prototype.downlink",
@@ -2856,6 +2862,9 @@
     "Number.prototype.toPrecision",
     "Number.prototype.toString",
     "Number.prototype.valueOf",
+    "OTPCredential",
+    "OTPCredential.prototype",
+    "OTPCredential.prototype.code",
     "Object",
     "Object.assign",
     "Object.create",
@@ -2869,6 +2878,7 @@
     "Object.getOwnPropertyNames",
     "Object.getOwnPropertySymbols",
     "Object.getPrototypeOf",
+    "Object.hasOwn",
     "Object.is",
     "Object.isExtensible",
     "Object.isFrozen",
@@ -6191,6 +6201,9 @@
     "WritableStream.prototype.close",
     "WritableStream.prototype.getWriter",
     "WritableStream.prototype.locked",
+    "WritableStreamDefaultController",
+    "WritableStreamDefaultController.prototype",
+    "WritableStreamDefaultController.prototype.error",
     "WritableStreamDefaultWriter",
     "WritableStreamDefaultWriter.prototype",
     "WritableStreamDefaultWriter.prototype.abort",
```

  
### chrome-unstable
  
#### 105.0.5148.2 (`2022-6-30`) 
No browser API changes.

  
#### 105.0.5137.4 (`2022-6-24`) ⚡
Added 23 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_104.0.5112.20_to_105.0.5137.4.diff), [json](./browser_apis/chrome-unstable_104.0.5112.20_to_105.0.5137.4.json), [full list](./browser_apis/chrome-unstable_105.0.5137.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_104.0.5112.20.json	2022-07-12 01:38:07.495065183 +0000
+++ ./browser_apis/chrome-unstable_105.0.5137.4.json	2022-07-12 01:38:07.495065183 +0000
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

  
#### 104.0.5112.12 (`2022-6-17`) ⚡
Added 6 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_104.0.5110.0_to_104.0.5112.12.diff), [json](./browser_apis/chrome-unstable_104.0.5110.0_to_104.0.5112.12.json), [full list](./browser_apis/chrome-unstable_104.0.5112.12.json))
 ```diff
--- ./browser_apis/chrome-unstable_104.0.5110.0.json	2022-07-12 01:38:07.495065183 +0000
+++ ./browser_apis/chrome-unstable_104.0.5112.12.json	2022-07-12 01:38:07.495065183 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "104.0.5110.0",
-  "browserApiCount": 7467,
+  "version": "104.0.5112.12",
+  "browserApiCount": 7472,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -403,6 +403,9 @@
     "BroadcastChannel.prototype.onmessage",
     "BroadcastChannel.prototype.onmessageerror",
     "BroadcastChannel.prototype.postMessage",
+    "BrowserCaptureMediaStreamTrack",
+    "BrowserCaptureMediaStreamTrack.prototype",
+    "BrowserCaptureMediaStreamTrack.prototype.cropTo",
     "ByteLengthQueuingStrategy",
     "ByteLengthQueuingStrategy.prototype",
     "ByteLengthQueuingStrategy.prototype.highWaterMark",
@@ -851,6 +854,9 @@
     "CredentialsContainer.prototype.get",
     "CredentialsContainer.prototype.preventSilentAccess",
     "CredentialsContainer.prototype.store",
+    "CropTarget",
+    "CropTarget.fromElement",
+    "CropTarget.prototype",
     "Crypto",
     "Crypto.prototype",
     "Crypto.prototype.getRandomValues",
@@ -6532,7 +6538,6 @@
     "WheelEvent.prototype.constructor.prototype.eventPhase",
     "WheelEvent.prototype.constructor.prototype.initEvent",
     "WheelEvent.prototype.constructor.prototype.initUIEvent",
-    "WheelEvent.prototype.constructor.prototype.path",
     "WheelEvent.prototype.constructor.prototype.preventDefault",
     "WheelEvent.prototype.constructor.prototype.returnValue",
     "WheelEvent.prototype.constructor.prototype.sourceCapabilities",
```

  
#### 104.0.5110.0 (`2022-6-10`) 
No browser API changes.

  
#### 104.0.5098.0 (`2022-6-3`) 
No browser API changes.

  
#### 104.0.5083.0 (`2022-5-26`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_103.0.5060.24_to_104.0.5083.0.diff), [json](./browser_apis/chrome-unstable_103.0.5060.24_to_104.0.5083.0.json), [full list](./browser_apis/chrome-unstable_104.0.5083.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_103.0.5060.24.json	2022-07-12 01:38:07.495065183 +0000
+++ ./browser_apis/chrome-unstable_104.0.5083.0.json	2022-07-12 01:38:07.495065183 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "103.0.5060.24",
-  "browserApiCount": 7463,
+  "version": "104.0.5083.0",
+  "browserApiCount": 7467,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -6068,6 +6068,7 @@
     "WebGL2RenderingContext.prototype.drawElements",
     "WebGL2RenderingContext.prototype.drawElementsInstanced",
     "WebGL2RenderingContext.prototype.drawRangeElements",
+    "WebGL2RenderingContext.prototype.drawingBufferColorSpace",
     "WebGL2RenderingContext.prototype.drawingBufferHeight",
     "WebGL2RenderingContext.prototype.drawingBufferWidth",
     "WebGL2RenderingContext.prototype.enable",
@@ -6200,6 +6201,7 @@
     "WebGL2RenderingContext.prototype.uniformMatrix4fv",
     "WebGL2RenderingContext.prototype.uniformMatrix4x2fv",
     "WebGL2RenderingContext.prototype.uniformMatrix4x3fv",
+    "WebGL2RenderingContext.prototype.unpackColorSpace",
     "WebGL2RenderingContext.prototype.useProgram",
     "WebGL2RenderingContext.prototype.validateProgram",
     "WebGL2RenderingContext.prototype.vertexAttrib1f",
@@ -6286,6 +6288,7 @@
     "WebGLRenderingContext.prototype.disableVertexAttribArray",
     "WebGLRenderingContext.prototype.drawArrays",
     "WebGLRenderingContext.prototype.drawElements",
+    "WebGLRenderingContext.prototype.drawingBufferColorSpace",
     "WebGLRenderingContext.prototype.drawingBufferHeight",
     "WebGLRenderingContext.prototype.drawingBufferWidth",
     "WebGLRenderingContext.prototype.enable",
@@ -6367,6 +6370,7 @@
     "WebGLRenderingContext.prototype.uniformMatrix2fv",
     "WebGLRenderingContext.prototype.uniformMatrix3fv",
     "WebGLRenderingContext.prototype.uniformMatrix4fv",
+    "WebGLRenderingContext.prototype.unpackColorSpace",
     "WebGLRenderingContext.prototype.useProgram",
     "WebGLRenderingContext.prototype.validateProgram",
     "WebGLRenderingContext.prototype.vertexAttrib1f",
```

  
#### 103.0.5060.24 (`2022-5-25`) ⚡
Added 8 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_103.0.5060.13_to_103.0.5060.24.diff), [json](./browser_apis/chrome-unstable_103.0.5060.13_to_103.0.5060.24.json), [full list](./browser_apis/chrome-unstable_103.0.5060.24.json))
 ```diff
--- ./browser_apis/chrome-unstable_103.0.5060.13.json	2022-07-12 01:38:07.491065133 +0000
+++ ./browser_apis/chrome-unstable_103.0.5060.24.json	2022-07-12 01:38:07.495065183 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "103.0.5060.13",
-  "browserApiCount": 7455,
+  "version": "103.0.5060.24",
+  "browserApiCount": 7463,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -1306,6 +1306,13 @@
     "FocusEvent",
     "FocusEvent.prototype",
     "FocusEvent.prototype.relatedTarget",
+    "FontData",
+    "FontData.prototype",
+    "FontData.prototype.blob",
+    "FontData.prototype.family",
+    "FontData.prototype.fullName",
+    "FontData.prototype.postscriptName",
+    "FontData.prototype.style",
     "FontFace",
     "FontFace.prototype",
     "FontFace.prototype.ascentOverride",
@@ -7295,6 +7302,7 @@
     "postMessage",
     "print",
     "prompt",
+    "queryLocalFonts",
     "queueMicrotask",
     "releaseEvents",
     "reportError",
```

  
#### 103.0.5060.13 (`2022-5-19`) 
No browser API changes.

  
#### 103.0.5056.0 (`2022-5-12`) 
No browser API changes.

  
#### 103.0.5042.0 (`2022-5-5`) ⚡
Added 8 APIs, removed 3 (see: [diff](./browser_apis/chrome-unstable_103.0.5028.0_to_103.0.5042.0.diff), [json](./browser_apis/chrome-unstable_103.0.5028.0_to_103.0.5042.0.json), [full list](./browser_apis/chrome-unstable_103.0.5042.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_103.0.5028.0.json	2022-07-12 01:38:07.491065133 +0000
+++ ./browser_apis/chrome-unstable_103.0.5042.0.json	2022-07-12 01:38:07.491065133 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "103.0.5028.0",
-  "browserApiCount": 7450,
+  "version": "103.0.5042.0",
+  "browserApiCount": 7455,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -14,6 +14,7 @@
     "AbortSignal.prototype.onabort",
     "AbortSignal.prototype.reason",
     "AbortSignal.prototype.throwIfAborted",
+    "AbortSignal.timeout",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -781,9 +782,6 @@
     "CanvasRenderingContext2D.prototype.transform",
     "CanvasRenderingContext2D.prototype.translate",
     "CanvasRenderingContext2D.prototype.wordSpacing",
-    "CaptureHandleChangeEvent",
-    "CaptureHandleChangeEvent.prototype",
-    "CaptureHandleChangeEvent.prototype.captureHandle",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -2546,6 +2544,12 @@
     "LargestContentfulPaint.prototype.size",
     "LargestContentfulPaint.prototype.toJSON",
     "LargestContentfulPaint.prototype.url",
+    "LaunchParams",
+    "LaunchParams.prototype",
+    "LaunchParams.prototype.files",
+    "LaunchQueue",
+    "LaunchQueue.prototype",
+    "LaunchQueue.prototype.setConsumer",
     "LayoutShift",
     "LayoutShift.prototype",
     "LayoutShift.prototype.hadRecentInput",
@@ -7150,6 +7154,7 @@
     "isFinite",
     "isNaN",
     "isSecureContext",
+    "launchQueue",
     "length",
     "localStorage",
     "location",
```

  
#### 103.0.5028.0 (`2022-4-28`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_102.0.5005.22_to_103.0.5028.0.diff), [json](./browser_apis/chrome-unstable_102.0.5005.22_to_103.0.5028.0.json), [full list](./browser_apis/chrome-unstable_103.0.5028.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_102.0.5005.22.json	2022-07-12 01:38:07.491065133 +0000
+++ ./browser_apis/chrome-unstable_103.0.5028.0.json	2022-07-12 01:38:07.491065133 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "102.0.5005.22",
-  "browserApiCount": 7446,
+  "version": "103.0.5028.0",
+  "browserApiCount": 7450,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -1167,6 +1167,7 @@
     "ElementInternals.prototype.form",
     "ElementInternals.prototype.labels",
     "ElementInternals.prototype.reportValidity",
+    "ElementInternals.prototype.role",
     "ElementInternals.prototype.setFormValue",
     "ElementInternals.prototype.setValidity",
     "ElementInternals.prototype.shadowRoot",
@@ -1290,6 +1291,7 @@
     "FileSystemFileHandle.prototype",
     "FileSystemFileHandle.prototype.createWritable",
     "FileSystemFileHandle.prototype.getFile",
+    "FileSystemFileHandle.prototype.move",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
     "FileSystemWritableFileStream.prototype.seek",
@@ -3491,6 +3493,7 @@
     "Option.prototype.constructor.prototype.replaceWith",
     "Option.prototype.constructor.prototype.requestFullscreen",
     "Option.prototype.constructor.prototype.requestPointerLock",
+    "Option.prototype.constructor.prototype.role",
     "Option.prototype.constructor.prototype.scroll",
     "Option.prototype.constructor.prototype.scrollBy",
     "Option.prototype.constructor.prototype.scrollHeight",
@@ -5165,6 +5168,7 @@
     "SerialPort",
     "SerialPort.prototype",
     "SerialPort.prototype.close",
+    "SerialPort.prototype.forget",
     "SerialPort.prototype.getInfo",
     "SerialPort.prototype.getSignals",
     "SerialPort.prototype.onconnect",
```

  
#### 102.0.5005.22 (`2022-4-26`) ⚡
Added 3 APIs, removed 3 (see: [diff](./browser_apis/chrome-unstable_102.0.5005.12_to_102.0.5005.22.diff), [json](./browser_apis/chrome-unstable_102.0.5005.12_to_102.0.5005.22.json), [full list](./browser_apis/chrome-unstable_102.0.5005.22.json))
 ```diff
--- ./browser_apis/chrome-unstable_102.0.5005.12.json	2022-07-12 01:38:07.491065133 +0000
+++ ./browser_apis/chrome-unstable_102.0.5005.22.json	2022-07-12 01:38:07.491065133 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "version": "102.0.5005.12",
+  "version": "102.0.5005.22",
   "browserApiCount": 7446,
   "browserApis": [
     "AbortController",
@@ -1778,7 +1778,7 @@
     "HTMLLinkElement.prototype.charset",
     "HTMLLinkElement.prototype.crossOrigin",
     "HTMLLinkElement.prototype.disabled",
-    "HTMLLinkElement.prototype.fetchpriority",
+    "HTMLLinkElement.prototype.fetchPriority",
     "HTMLLinkElement.prototype.href",
     "HTMLLinkElement.prototype.hreflang",
     "HTMLLinkElement.prototype.imageSizes",
@@ -1927,7 +1927,7 @@
     "HTMLScriptElement.prototype.crossOrigin",
     "HTMLScriptElement.prototype.defer",
     "HTMLScriptElement.prototype.event",
-    "HTMLScriptElement.prototype.fetchpriority",
+    "HTMLScriptElement.prototype.fetchPriority",
     "HTMLScriptElement.prototype.htmlFor",
     "HTMLScriptElement.prototype.integrity",
     "HTMLScriptElement.prototype.noModule",
@@ -2300,7 +2300,7 @@
     "Image.prototype.currentSrc",
     "Image.prototype.decode",
     "Image.prototype.decoding",
-    "Image.prototype.fetchpriority",
+    "Image.prototype.fetchPriority",
     "Image.prototype.height",
     "Image.prototype.hspace",
     "Image.prototype.isMap",
```

  
#### 102.0.5005.12 (`2022-4-21`) ⚡
Added 58 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_102.0.4997.0_to_102.0.5005.12.diff), [json](./browser_apis/chrome-unstable_102.0.4997.0_to_102.0.5005.12.json), [full list](./browser_apis/chrome-unstable_102.0.5005.12.json))
 ```diff
--- ./browser_apis/chrome-unstable_102.0.4997.0.json	2022-07-12 01:38:07.491065133 +0000
+++ ./browser_apis/chrome-unstable_102.0.5005.12.json	2022-07-12 01:38:07.491065133 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "102.0.4997.0",
-  "browserApiCount": 7388,
+  "version": "102.0.5005.12",
+  "browserApiCount": 7446,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -222,6 +222,7 @@
     "AudioContext.prototype.createMediaStreamDestination",
     "AudioContext.prototype.createMediaStreamSource",
     "AudioContext.prototype.getOutputTimestamp",
+    "AudioContext.prototype.outputLatency",
     "AudioContext.prototype.resume",
     "AudioContext.prototype.suspend",
     "AudioData",
@@ -2868,12 +2869,68 @@
     "NamedNodeMap.prototype.removeNamedItemNS",
     "NamedNodeMap.prototype.setNamedItem",
     "NamedNodeMap.prototype.setNamedItemNS",
+    "NavigateEvent",
+    "NavigateEvent.prototype",
+    "NavigateEvent.prototype.canTransition",
+    "NavigateEvent.prototype.destination",
+    "NavigateEvent.prototype.downloadRequest",
+    "NavigateEvent.prototype.formData",
+    "NavigateEvent.prototype.hashChange",
+    "NavigateEvent.prototype.info",
+    "NavigateEvent.prototype.navigationType",
+    "NavigateEvent.prototype.restoreScroll",
+    "NavigateEvent.prototype.signal",
+    "NavigateEvent.prototype.transitionWhile",
+    "NavigateEvent.prototype.userInitiated",
+    "Navigation",
+    "Navigation.prototype",
+    "Navigation.prototype.back",
+    "Navigation.prototype.canGoBack",
+    "Navigation.prototype.canGoForward",
+    "Navigation.prototype.currentEntry",
+    "Navigation.prototype.entries",
+    "Navigation.prototype.forward",
+    "Navigation.prototype.navigate",
+    "Navigation.prototype.oncurrententrychange",
+    "Navigation.prototype.onnavigate",
+    "Navigation.prototype.onnavigateerror",
+    "Navigation.prototype.onnavigatesuccess",
+    "Navigation.prototype.reload",
+    "Navigation.prototype.transition",
+    "Navigation.prototype.traverseTo",
+    "Navigation.prototype.updateCurrentEntry",
+    "NavigationCurrentEntryChangeEvent",
+    "NavigationCurrentEntryChangeEvent.prototype",
+    "NavigationCurrentEntryChangeEvent.prototype.from",
+    "NavigationCurrentEntryChangeEvent.prototype.navigationType",
+    "NavigationDestination",
+    "NavigationDestination.prototype",
+    "NavigationDestination.prototype.getState",
+    "NavigationDestination.prototype.id",
+    "NavigationDestination.prototype.index",
+    "NavigationDestination.prototype.key",
+    "NavigationDestination.prototype.sameDocument",
+    "NavigationDestination.prototype.url",
+    "NavigationHistoryEntry",
+    "NavigationHistoryEntry.prototype",
+    "NavigationHistoryEntry.prototype.getState",
+    "NavigationHistoryEntry.prototype.id",
+    "NavigationHistoryEntry.prototype.index",
+    "NavigationHistoryEntry.prototype.key",
+    "NavigationHistoryEntry.prototype.ondispose",
+    "NavigationHistoryEntry.prototype.sameDocument",
+    "NavigationHistoryEntry.prototype.url",
     "NavigationPreloadManager",
     "NavigationPreloadManager.prototype",
     "NavigationPreloadManager.prototype.disable",
     "NavigationPreloadManager.prototype.enable",
     "NavigationPreloadManager.prototype.getState",
     "NavigationPreloadManager.prototype.setHeaderValue",
+    "NavigationTransition",
+    "NavigationTransition.prototype",
+    "NavigationTransition.prototype.finished",
+    "NavigationTransition.prototype.from",
+    "NavigationTransition.prototype.navigationType",
     "Navigator",
     "Navigator.prototype",
     "Navigator.prototype.appCodeName",
@@ -7098,6 +7155,7 @@
     "moveBy",
     "moveTo",
     "name",
+    "navigation",
     "navigator",
     "offscreenBuffering",
     "onabort",
```

  
#### 102.0.4997.0 (`2022-4-12`) 
No browser API changes.

  
#### 102.0.4987.0 (`2022-4-7`) ⚡
Added 10 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_102.0.4972.0_to_102.0.4987.0.diff), [json](./browser_apis/chrome-unstable_102.0.4972.0_to_102.0.4987.0.json), [full list](./browser_apis/chrome-unstable_102.0.4987.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_102.0.4972.0.json	2022-07-12 01:38:07.487065083 +0000
+++ ./browser_apis/chrome-unstable_102.0.4987.0.json	2022-07-12 01:38:07.491065133 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "102.0.4972.0",
-  "browserApiCount": 7378,
+  "version": "102.0.4987.0",
+  "browserApiCount": 7388,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -684,12 +684,14 @@
     "CanvasCaptureMediaStreamTrack.prototype.contentHint",
     "CanvasCaptureMediaStreamTrack.prototype.enabled",
     "CanvasCaptureMediaStreamTrack.prototype.getCapabilities",
+    "CanvasCaptureMediaStreamTrack.prototype.getCaptureHandle",
     "CanvasCaptureMediaStreamTrack.prototype.getConstraints",
     "CanvasCaptureMediaStreamTrack.prototype.getSettings",
     "CanvasCaptureMediaStreamTrack.prototype.id",
     "CanvasCaptureMediaStreamTrack.prototype.kind",
     "CanvasCaptureMediaStreamTrack.prototype.label",
     "CanvasCaptureMediaStreamTrack.prototype.muted",
+    "CanvasCaptureMediaStreamTrack.prototype.oncapturehandlechange",
     "CanvasCaptureMediaStreamTrack.prototype.onended",
     "CanvasCaptureMediaStreamTrack.prototype.onmute",
     "CanvasCaptureMediaStreamTrack.prototype.onunmute",
@@ -778,6 +780,9 @@
     "CanvasRenderingContext2D.prototype.transform",
     "CanvasRenderingContext2D.prototype.translate",
     "CanvasRenderingContext2D.prototype.wordSpacing",
+    "CaptureHandleChangeEvent",
+    "CaptureHandleChangeEvent.prototype",
+    "CaptureHandleChangeEvent.prototype.captureHandle",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -2669,6 +2674,7 @@
     "MediaDevices.prototype.getSupportedConstraints",
     "MediaDevices.prototype.getUserMedia",
     "MediaDevices.prototype.ondevicechange",
+    "MediaDevices.prototype.setCaptureHandleConfig",
     "MediaElementAudioSourceNode",
     "MediaElementAudioSourceNode.prototype",
     "MediaElementAudioSourceNode.prototype.mediaElement",
@@ -3316,6 +3322,7 @@
     "Option.prototype.constructor.prototype.onauxclick",
     "Option.prototype.constructor.prototype.onbeforecopy",
     "Option.prototype.constructor.prototype.onbeforecut",
+    "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
     "Option.prototype.constructor.prototype.onbeforexrselect",
     "Option.prototype.constructor.prototype.onblur",
@@ -4906,6 +4913,7 @@
     "SVGViewElement.prototype.onanimationiteration",
     "SVGViewElement.prototype.onanimationstart",
     "SVGViewElement.prototype.onauxclick",
+    "SVGViewElement.prototype.onbeforematch",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
     "SVGViewElement.prototype.oncancel",
@@ -6604,6 +6612,7 @@
     "XMLDocument.prototype.onauxclick",
     "XMLDocument.prototype.onbeforecopy",
     "XMLDocument.prototype.onbeforecut",
+    "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
     "XMLDocument.prototype.onbeforexrselect",
     "XMLDocument.prototype.onblur",
@@ -7099,6 +7108,7 @@
     "onappinstalled",
     "onauxclick",
     "onbeforeinstallprompt",
+    "onbeforematch",
     "onbeforeprint",
     "onbeforeunload",
     "onbeforexrselect",
```

  
#### 102.0.4972.0 (`2022-3-31`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_101.0.4951.15_to_102.0.4972.0.diff), [json](./browser_apis/chrome-unstable_101.0.4951.15_to_102.0.4972.0.json), [full list](./browser_apis/chrome-unstable_102.0.4972.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_101.0.4951.15.json	2022-07-12 01:38:07.487065083 +0000
+++ ./browser_apis/chrome-unstable_102.0.4972.0.json	2022-07-12 01:38:07.487065083 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "101.0.4951.15",
-  "browserApiCount": 7375,
+  "version": "102.0.4972.0",
+  "browserApiCount": 7378,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -1131,6 +1131,7 @@
     "ElementInternals.prototype.ariaExpanded",
     "ElementInternals.prototype.ariaHasPopup",
     "ElementInternals.prototype.ariaHidden",
+    "ElementInternals.prototype.ariaInvalid",
     "ElementInternals.prototype.ariaKeyShortcuts",
     "ElementInternals.prototype.ariaLabel",
     "ElementInternals.prototype.ariaLevel",
@@ -3181,6 +3182,7 @@
     "Option.prototype.constructor.prototype.ariaExpanded",
     "Option.prototype.constructor.prototype.ariaHasPopup",
     "Option.prototype.constructor.prototype.ariaHidden",
+    "Option.prototype.constructor.prototype.ariaInvalid",
     "Option.prototype.constructor.prototype.ariaKeyShortcuts",
     "Option.prototype.constructor.prototype.ariaLabel",
     "Option.prototype.constructor.prototype.ariaLevel",
@@ -3287,6 +3289,7 @@
     "Option.prototype.constructor.prototype.hasPointerCapture",
     "Option.prototype.constructor.prototype.hidden",
     "Option.prototype.constructor.prototype.id",
+    "Option.prototype.constructor.prototype.inert",
     "Option.prototype.constructor.prototype.innerHTML",
     "Option.prototype.constructor.prototype.innerText",
     "Option.prototype.constructor.prototype.inputMode",
```

  
#### 101.0.4951.15 (`2022-3-29`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_101.0.4951.7_to_101.0.4951.15.diff), [json](./browser_apis/chrome-unstable_101.0.4951.7_to_101.0.4951.15.json), [full list](./browser_apis/chrome-unstable_101.0.4951.15.json))
 ```diff
--- ./browser_apis/chrome-unstable_101.0.4951.7.json	2022-07-12 01:38:07.487065083 +0000
+++ ./browser_apis/chrome-unstable_101.0.4951.15.json	2022-07-12 01:38:07.487065083 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "101.0.4951.7",
-  "browserApiCount": 7374,
+  "version": "101.0.4951.15",
+  "browserApiCount": 7375,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -2660,6 +2660,7 @@
     "MediaCapabilities",
     "MediaCapabilities.prototype",
     "MediaCapabilities.prototype.decodingInfo",
+    "MediaCapabilities.prototype.encodingInfo",
     "MediaDevices",
     "MediaDevices.prototype",
     "MediaDevices.prototype.enumerateDevices",
```

  
#### 101.0.4951.7 (`2022-3-23`) ⚡
Added 6 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_101.0.4947.0_to_101.0.4951.7.diff), [json](./browser_apis/chrome-unstable_101.0.4947.0_to_101.0.4951.7.json), [full list](./browser_apis/chrome-unstable_101.0.4951.7.json))
 ```diff
--- ./browser_apis/chrome-unstable_101.0.4947.0.json	2022-07-12 01:38:07.487065083 +0000
+++ ./browser_apis/chrome-unstable_101.0.4951.7.json	2022-07-12 01:38:07.487065083 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "101.0.4947.0",
-  "browserApiCount": 7368,
+  "version": "101.0.4951.7",
+  "browserApiCount": 7374,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -460,6 +460,12 @@
     "CSSFontFaceRule",
     "CSSFontFaceRule.prototype",
     "CSSFontFaceRule.prototype.style",
+    "CSSFontPaletteValuesRule",
+    "CSSFontPaletteValuesRule.prototype",
+    "CSSFontPaletteValuesRule.prototype.basePalette",
+    "CSSFontPaletteValuesRule.prototype.fontFamily",
+    "CSSFontPaletteValuesRule.prototype.name",
+    "CSSFontPaletteValuesRule.prototype.overrideColors",
     "CSSImageValue",
     "CSSImageValue.prototype",
     "CSSImportRule",
```

  
#### 101.0.4947.0 (`2022-3-18`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_101.0.4929.5_to_101.0.4947.0.diff), [json](./browser_apis/chrome-unstable_101.0.4929.5_to_101.0.4947.0.json), [full list](./browser_apis/chrome-unstable_101.0.4947.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_101.0.4929.5.json	2022-07-12 01:38:07.487065083 +0000
+++ ./browser_apis/chrome-unstable_101.0.4947.0.json	2022-07-12 01:38:07.487065083 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "101.0.4929.5",
-  "browserApiCount": 7365,
+  "version": "101.0.4947.0",
+  "browserApiCount": 7368,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -1765,6 +1765,7 @@
     "HTMLLinkElement.prototype.charset",
     "HTMLLinkElement.prototype.crossOrigin",
     "HTMLLinkElement.prototype.disabled",
+    "HTMLLinkElement.prototype.fetchpriority",
     "HTMLLinkElement.prototype.href",
     "HTMLLinkElement.prototype.hreflang",
     "HTMLLinkElement.prototype.imageSizes",
@@ -1913,6 +1914,7 @@
     "HTMLScriptElement.prototype.crossOrigin",
     "HTMLScriptElement.prototype.defer",
     "HTMLScriptElement.prototype.event",
+    "HTMLScriptElement.prototype.fetchpriority",
     "HTMLScriptElement.prototype.htmlFor",
     "HTMLScriptElement.prototype.integrity",
     "HTMLScriptElement.prototype.noModule",
@@ -2285,6 +2287,7 @@
     "Image.prototype.currentSrc",
     "Image.prototype.decode",
     "Image.prototype.decoding",
+    "Image.prototype.fetchpriority",
     "Image.prototype.height",
     "Image.prototype.hspace",
     "Image.prototype.isMap",
```

  
#### 101.0.4929.5 (`2022-3-10`) 
No browser API changes.

  
#### 101.0.4919.0 (`2022-3-3`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_100.0.4896.20_to_101.0.4919.0.diff), [json](./browser_apis/chrome-unstable_100.0.4896.20_to_101.0.4919.0.json), [full list](./browser_apis/chrome-unstable_101.0.4919.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_100.0.4896.20.json	2022-07-12 01:38:07.487065083 +0000
+++ ./browser_apis/chrome-unstable_101.0.4919.0.json	2022-07-12 01:38:07.487065083 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "100.0.4896.20",
-  "browserApiCount": 7364,
+  "version": "101.0.4919.0",
+  "browserApiCount": 7365,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -5619,6 +5619,7 @@
     "USBDevice.prototype.deviceVersionMajor",
     "USBDevice.prototype.deviceVersionMinor",
     "USBDevice.prototype.deviceVersionSubminor",
+    "USBDevice.prototype.forget",
     "USBDevice.prototype.isochronousTransferIn",
     "USBDevice.prototype.isochronousTransferOut",
     "USBDevice.prototype.manufacturerName",
```

  
#### 100.0.4896.20 (`2022-3-2`) ⚡
Added 17 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_100.0.4896.12_to_100.0.4896.20.diff), [json](./browser_apis/chrome-unstable_100.0.4896.12_to_100.0.4896.20.json), [full list](./browser_apis/chrome-unstable_100.0.4896.20.json))
 ```diff
--- ./browser_apis/chrome-unstable_100.0.4896.12.json	2022-07-12 01:38:07.487065083 +0000
+++ ./browser_apis/chrome-unstable_100.0.4896.20.json	2022-07-12 01:38:07.487065083 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "100.0.4896.12",
-  "browserApiCount": 7347,
+  "version": "100.0.4896.20",
+  "browserApiCount": 7364,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -5002,9 +5002,25 @@
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
@@ -7041,6 +7057,7 @@
     "frameElement",
     "frames",
     "getComputedStyle",
+    "getScreenDetails",
     "getSelection",
     "history",
     "indexedDB",
```

  
#### 100.0.4896.12 (`2022-2-24`) 
No browser API changes.

  
#### 100.0.4892.0 (`2022-2-17`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_100.0.4878.0_to_100.0.4892.0.diff), [json](./browser_apis/chrome-unstable_100.0.4878.0_to_100.0.4892.0.json), [full list](./browser_apis/chrome-unstable_100.0.4892.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_100.0.4878.0.json	2022-07-12 01:38:07.483065033 +0000
+++ ./browser_apis/chrome-unstable_100.0.4892.0.json	2022-07-12 01:38:07.483065033 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "100.0.4878.0",
-  "browserApiCount": 7345,
+  "version": "100.0.4892.0",
+  "browserApiCount": 7347,
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
@@ -1397,6 +1398,7 @@
     "HIDDevice.prototype",
     "HIDDevice.prototype.close",
     "HIDDevice.prototype.collections",
+    "HIDDevice.prototype.forget",
     "HIDDevice.prototype.oninputreport",
     "HIDDevice.prototype.open",
     "HIDDevice.prototype.opened",
```

  
#### 100.0.4878.0 (`2022-2-10`) ⚡
Added 5 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_100.0.4867.0_to_100.0.4878.0.diff), [json](./browser_apis/chrome-unstable_100.0.4867.0_to_100.0.4878.0.json), [full list](./browser_apis/chrome-unstable_100.0.4878.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_100.0.4867.0.json	2022-07-12 01:38:07.483065033 +0000
+++ ./browser_apis/chrome-unstable_100.0.4878.0.json	2022-07-12 01:38:07.483065033 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "100.0.4867.0",
-  "browserApiCount": 7340,
+  "version": "100.0.4878.0",
+  "browserApiCount": 7345,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -487,6 +487,11 @@
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
```

  
#### 100.0.4867.0 (`2022-2-4`) ⚡
Added 17 APIs, removed 18 (see: [diff](./browser_apis/chrome-unstable_99.0.4844.17_to_100.0.4867.0.diff), [json](./browser_apis/chrome-unstable_99.0.4844.17_to_100.0.4867.0.json), [full list](./browser_apis/chrome-unstable_100.0.4867.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_99.0.4844.17.json	2022-07-12 01:38:07.511065384 +0000
+++ ./browser_apis/chrome-unstable_100.0.4867.0.json	2022-07-12 01:38:07.483065033 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "99.0.4844.17",
-  "browserApiCount": 7341,
+  "version": "100.0.4867.0",
+  "browserApiCount": 7340,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -665,8 +665,25 @@
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
@@ -2758,24 +2775,6 @@
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
```

  
#### 99.0.4844.17 (`2022-2-3`) 
No browser API changes.

  
#### 99.0.4844.16 (`2022-2-1`) 
No browser API changes.

  
#### 99.0.4844.11 (`2022-1-28`) ⚡
Added 0 APIs, removed 10 (see: [diff](./browser_apis/chrome-unstable_99.0.4840.0_to_99.0.4844.11.diff), [json](./browser_apis/chrome-unstable_99.0.4840.0_to_99.0.4844.11.json), [full list](./browser_apis/chrome-unstable_99.0.4844.11.json))
 ```diff
--- ./browser_apis/chrome-unstable_99.0.4840.0.json	2022-07-12 01:38:07.507065333 +0000
+++ ./browser_apis/chrome-unstable_99.0.4844.11.json	2022-07-12 01:38:07.511065384 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "99.0.4840.0",
-  "browserApiCount": 7351,
+  "version": "99.0.4844.11",
+  "browserApiCount": 7341,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -2913,7 +2913,6 @@
     "Navigator.prototype.webkitGetUserMedia",
     "Navigator.prototype.webkitPersistentStorage",
     "Navigator.prototype.webkitTemporaryStorage",
-    "Navigator.prototype.windowControlsOverlay",
     "Navigator.prototype.xr",
     "NavigatorManagedData",
     "NavigatorManagedData.prototype",
@@ -6454,15 +6453,6 @@
     "WheelEvent.prototype.y",
     "Window",
     "Window.prototype",
-    "WindowControlsOverlay",
-    "WindowControlsOverlay.prototype",
-    "WindowControlsOverlay.prototype.getTitlebarAreaRect",
-    "WindowControlsOverlay.prototype.ongeometrychange",
-    "WindowControlsOverlay.prototype.visible",
-    "WindowControlsOverlayGeometryChangeEvent",
-    "WindowControlsOverlayGeometryChangeEvent.prototype",
-    "WindowControlsOverlayGeometryChangeEvent.prototype.titlebarAreaRect",
-    "WindowControlsOverlayGeometryChangeEvent.prototype.visible",
     "Worker",
     "Worker.prototype",
     "Worker.prototype.onerror",
```

  <!-- browserapis:end -->
