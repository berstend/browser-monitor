# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 95.0.4638.69 (`2021-10-28`) 
No browser API changes.

  
#### 95.0.4638.54 (`2021-10-19`) ⚡
Added 23 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_94.0.4606.81_to_95.0.4638.54.diff), [json](./browser_apis/chrome-stable_94.0.4606.81_to_95.0.4638.54.json), [full list](./browser_apis/chrome-stable_95.0.4638.54.json))
 ```diff
--- ./browser_apis/chrome-stable_94.0.4606.81.json	2021-11-02 01:59:37.805399316 +0000
+++ ./browser_apis/chrome-stable_95.0.4638.54.json	2021-11-02 01:59:55.925496889 +0000
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

  
#### 94.0.4606.81 (`2021-10-07`) 
No browser API changes.

  
#### 94.0.4606.71 (`2021-09-30`) 
No browser API changes.

  
#### 94.0.4606.61 (`2021-09-24`) 
No browser API changes.

  
#### 94.0.4606.54 (`2021-09-21`) ⚡
Added 157 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_93.0.4577.82_to_94.0.4606.54.diff), [json](./browser_apis/chrome-stable_93.0.4577.82_to_94.0.4606.54.json), [full list](./browser_apis/chrome-stable_94.0.4606.54.json))
 ```diff
--- ./browser_apis/chrome-stable_93.0.4577.82.json	2021-11-02 01:58:19.828974623 +0000
+++ ./browser_apis/chrome-stable_94.0.4606.54.json	2021-11-02 01:58:39.297080791 +0000
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

  
#### 93.0.4577.82 (`2021-09-13`) 
No browser API changes.

  
#### 93.0.4577.63 (`2021-08-31`) ⚡
Added 13 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_92.0.4515.159_to_93.0.4577.63.diff), [json](./browser_apis/chrome-stable_92.0.4515.159_to_93.0.4577.63.json), [full list](./browser_apis/chrome-stable_93.0.4577.63.json))
 ```diff
--- ./browser_apis/chrome-stable_92.0.4515.159.json	2021-11-02 01:57:43.324772381 +0000
+++ ./browser_apis/chrome-stable_93.0.4577.63.json	2021-11-02 01:58:02.752877737 +0000
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

  
#### 92.0.4515.159 (`2021-08-16`) 
No browser API changes.

  
#### 92.0.4515.131 (`2021-08-02`) 
No browser API changes.

  
#### 92.0.4515.107 (`2021-07-20`) ⚡
Added 6 APIs, removed 5 (see: [diff](./browser_apis/chrome-stable_91.0.4472.164_to_92.0.4515.107.diff), [json](./browser_apis/chrome-stable_91.0.4472.164_to_92.0.4515.107.json), [full list](./browser_apis/chrome-stable_92.0.4515.107.json))
 ```diff
--- ./browser_apis/chrome-stable_91.0.4472.164.json	2021-11-02 01:56:44.380454840 +0000
+++ ./browser_apis/chrome-stable_92.0.4515.107.json	2021-11-02 01:57:05.688567051 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "91.0.4472.164",
-  "browserApiCount": 7052,
+  "version": "92.0.4515.107",
+  "browserApiCount": 7053,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -84,6 +84,7 @@
     "Array.isArray",
     "Array.of",
     "Array.prototype",
+    "Array.prototype.at",
     "Array.prototype.concat",
     "Array.prototype.copyWithin",
     "Array.prototype.entries",
@@ -765,6 +766,7 @@
     "Crypto",
     "Crypto.prototype",
     "Crypto.prototype.getRandomValues",
+    "Crypto.prototype.randomUUID",
     "Crypto.prototype.subtle",
     "CryptoKey",
     "CryptoKey.prototype",
@@ -1201,6 +1203,7 @@
     "FontFace.prototype.lineGapOverride",
     "FontFace.prototype.load",
     "FontFace.prototype.loaded",
+    "FontFace.prototype.sizeAdjust",
     "FontFace.prototype.status",
     "FontFace.prototype.stretch",
     "FontFace.prototype.style",
@@ -2214,6 +2217,7 @@
     "ImageCapture.prototype.track",
     "ImageData",
     "ImageData.prototype",
+    "ImageData.prototype.colorSpace",
     "ImageData.prototype.data",
     "ImageData.prototype.height",
     "ImageData.prototype.width",
@@ -3415,7 +3419,6 @@
     "Performance.prototype.getEntriesByType",
     "Performance.prototype.mark",
     "Performance.prototype.measure",
-    "Performance.prototype.measureUserAgentSpecificMemory",
     "Performance.prototype.memory",
     "Performance.prototype.navigation",
     "Performance.prototype.now",
@@ -4983,10 +4986,6 @@
     "ShadowRoot.prototype.replaceChildren",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
-    "SharedArrayBuffer",
-    "SharedArrayBuffer.prototype",
-    "SharedArrayBuffer.prototype.byteLength",
-    "SharedArrayBuffer.prototype.slice",
     "SharedWorker",
     "SharedWorker.prototype",
     "SharedWorker.prototype.onerror",
@@ -5075,6 +5074,7 @@
     "String.fromCodePoint",
     "String.prototype",
     "String.prototype.anchor",
+    "String.prototype.at",
     "String.prototype.big",
     "String.prototype.blink",
     "String.prototype.bold",
@@ -5470,6 +5470,7 @@
     "Uint32Array.prototype",
     "Uint8Array",
     "Uint8Array.prototype",
+    "Uint8Array.prototype.at",
     "Uint8Array.prototype.buffer",
     "Uint8Array.prototype.byteLength",
     "Uint8Array.prototype.byteOffset",
```

  
#### 91.0.4472.164 (`2021-07-15`) 
No browser API changes.

  
#### 91.0.4472.114 (`2021-06-17`) 
No browser API changes.

  
#### 91.0.4472.106 (`2021-06-14`) 
No browser API changes.

  
#### 91.0.4472.101 (`2021-06-09`) 
No browser API changes.

  
#### 91.0.4472.77 (`2021-05-25`) ⚡
Added 23 APIs, removed 2 (see: [diff](./browser_apis/chrome-stable_90.0.4430.212_to_91.0.4472.77.diff), [json](./browser_apis/chrome-stable_90.0.4430.212_to_91.0.4472.77.json), [full list](./browser_apis/chrome-stable_91.0.4472.77.json))
 ```diff
--- ./browser_apis/chrome-stable_90.0.4430.212.json	2021-11-02 01:55:05.351876008 +0000
+++ ./browser_apis/chrome-stable_91.0.4472.77.json	2021-11-02 01:55:26.148024027 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "90.0.4430.212",
-  "browserApiCount": 7031,
+  "version": "91.0.4472.77",
+  "browserApiCount": 7052,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -406,6 +406,19 @@
     "CSSAnimation",
     "CSSAnimation.prototype",
     "CSSAnimation.prototype.animationName",
+    "CSSCounterStyleRule",
+    "CSSCounterStyleRule.prototype",
+    "CSSCounterStyleRule.prototype.additiveSymbols",
+    "CSSCounterStyleRule.prototype.fallback",
+    "CSSCounterStyleRule.prototype.name",
+    "CSSCounterStyleRule.prototype.negative",
+    "CSSCounterStyleRule.prototype.pad",
+    "CSSCounterStyleRule.prototype.prefix",
+    "CSSCounterStyleRule.prototype.range",
+    "CSSCounterStyleRule.prototype.speakAs",
+    "CSSCounterStyleRule.prototype.suffix",
+    "CSSCounterStyleRule.prototype.symbols",
+    "CSSCounterStyleRule.prototype.system",
     "CSSFontFaceRule",
     "CSSFontFaceRule.prototype",
     "CSSFontFaceRule.prototype.style",
@@ -1262,6 +1275,8 @@
     "GeolocationPositionError.prototype",
     "GeolocationPositionError.prototype.code",
     "GeolocationPositionError.prototype.message",
+    "GravitySensor",
+    "GravitySensor.prototype",
     "Gyroscope",
     "Gyroscope.prototype",
     "Gyroscope.prototype.x",
@@ -1925,6 +1940,7 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
+    "HTMLTemplateElement.prototype.shadowRoot",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
     "HTMLTextAreaElement.prototype.autocomplete",
@@ -2734,6 +2750,7 @@
     "Navigator.prototype.language",
     "Navigator.prototype.languages",
     "Navigator.prototype.locks",
+    "Navigator.prototype.managed",
     "Navigator.prototype.maxTouchPoints",
     "Navigator.prototype.mediaCapabilities",
     "Navigator.prototype.mediaDevices",
@@ -2769,6 +2786,10 @@
     "Navigator.prototype.webkitPersistentStorage",
     "Navigator.prototype.webkitTemporaryStorage",
     "Navigator.prototype.xr",
+    "NavigatorManagedData",
+    "NavigatorManagedData.prototype",
+    "NavigatorManagedData.prototype.getManagedConfiguration",
+    "NavigatorManagedData.prototype.onmanagedconfigurationchange",
     "NavigatorUAData",
     "NavigatorUAData.prototype",
     "NavigatorUAData.prototype.brands",
@@ -3097,6 +3118,7 @@
     "Option.prototype.constructor.prototype.getElementsByClassName",
     "Option.prototype.constructor.prototype.getElementsByTagName",
     "Option.prototype.constructor.prototype.getElementsByTagNameNS",
+    "Option.prototype.constructor.prototype.getInnerHTML",
     "Option.prototype.constructor.prototype.hasAttribute",
     "Option.prototype.constructor.prototype.hasAttributeNS",
     "Option.prototype.constructor.prototype.hasAttributes",
@@ -4947,6 +4969,7 @@
     "ShadowRoot.prototype.fullscreenElement",
     "ShadowRoot.prototype.getAnimations",
     "ShadowRoot.prototype.getElementById",
+    "ShadowRoot.prototype.getInnerHTML",
     "ShadowRoot.prototype.getSelection",
     "ShadowRoot.prototype.host",
     "ShadowRoot.prototype.innerHTML",
@@ -7010,8 +7033,6 @@
     "webkitSpeechRecognitionError.prototype.message",
     "webkitSpeechRecognitionEvent",
     "webkitSpeechRecognitionEvent.prototype",
-    "webkitSpeechRecognitionEvent.prototype.emma",
-    "webkitSpeechRecognitionEvent.prototype.interpretation",
     "webkitSpeechRecognitionEvent.prototype.resultIndex",
     "webkitSpeechRecognitionEvent.prototype.results",
     "webkitStorageInfo",
```

  
#### 90.0.4430.212 (`2021-05-10`) 
No browser API changes.

  
#### 90.0.4430.93 (`2021-04-26`) 
No browser API changes.

  
#### 90.0.4430.85 (`2021-04-20`) 
No browser API changes.

  
#### 90.0.4430.72 (`2021-04-14`) 
No browser API changes.

  
### chrome-unstable
  
#### 97.0.4682.3 (`2021-10-27`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_97.0.4676.0_to_97.0.4682.3.diff), [json](./browser_apis/chrome-unstable_97.0.4676.0_to_97.0.4682.3.json), [full list](./browser_apis/chrome-unstable_97.0.4682.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_97.0.4676.0.json	2021-11-02 02:22:17.307595464 +0000
+++ ./browser_apis/chrome-unstable_97.0.4682.3.json	2021-11-02 02:22:37.391708154 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "97.0.4676.0",
-  "browserApiCount": 7285,
+  "version": "97.0.4682.3",
+  "browserApiCount": 7288,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -3323,6 +3323,7 @@
     "Option.prototype.constructor.prototype.onresize",
     "Option.prototype.constructor.prototype.onscroll",
     "Option.prototype.constructor.prototype.onsearch",
+    "Option.prototype.constructor.prototype.onsecuritypolicyviolation",
     "Option.prototype.constructor.prototype.onseeked",
     "Option.prototype.constructor.prototype.onseeking",
     "Option.prototype.constructor.prototype.onselect",
@@ -4904,6 +4905,7 @@
     "SVGViewElement.prototype.onreset",
     "SVGViewElement.prototype.onresize",
     "SVGViewElement.prototype.onscroll",
+    "SVGViewElement.prototype.onsecuritypolicyviolation",
     "SVGViewElement.prototype.onseeked",
     "SVGViewElement.prototype.onseeking",
     "SVGViewElement.prototype.onselect",
@@ -7086,6 +7088,7 @@
     "onresize",
     "onscroll",
     "onsearch",
+    "onsecuritypolicyviolation",
     "onseeked",
     "onseeking",
     "onselect",
```

  
#### 97.0.4676.0 (`2021-10-21`) ⚡
Added 37 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_96.0.4664.18_to_97.0.4676.0.diff), [json](./browser_apis/chrome-unstable_96.0.4664.18_to_97.0.4676.0.json), [full list](./browser_apis/chrome-unstable_97.0.4676.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_96.0.4664.18.json	2021-11-02 02:21:57.555484290 +0000
+++ ./browser_apis/chrome-unstable_97.0.4676.0.json	2021-11-02 02:22:17.307595464 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "96.0.4664.18",
-  "browserApiCount": 7248,
+  "version": "97.0.4676.0",
+  "browserApiCount": 7285,
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
@@ -3326,6 +3328,7 @@
     "Option.prototype.constructor.prototype.onselect",
     "Option.prototype.constructor.prototype.onselectionchange",
     "Option.prototype.constructor.prototype.onselectstart",
+    "Option.prototype.constructor.prototype.onslotchange",
     "Option.prototype.constructor.prototype.onstalled",
     "Option.prototype.constructor.prototype.onsubmit",
     "Option.prototype.constructor.prototype.onsuspend",
@@ -3648,6 +3651,7 @@
     "PeriodicWave.prototype",
     "PermissionStatus",
     "PermissionStatus.prototype",
+    "PermissionStatus.prototype.name",
     "PermissionStatus.prototype.onchange",
     "PermissionStatus.prototype.state",
     "Permissions",
@@ -4905,6 +4909,7 @@
     "SVGViewElement.prototype.onselect",
     "SVGViewElement.prototype.onselectionchange",
     "SVGViewElement.prototype.onselectstart",
+    "SVGViewElement.prototype.onslotchange",
     "SVGViewElement.prototype.onstalled",
     "SVGViewElement.prototype.onsubmit",
     "SVGViewElement.prototype.onsuspend",
@@ -5087,6 +5092,7 @@
     "ShadowRoot.prototype.innerHTML",
     "ShadowRoot.prototype.lastElementChild",
     "ShadowRoot.prototype.mode",
+    "ShadowRoot.prototype.onslotchange",
     "ShadowRoot.prototype.pictureInPictureElement",
     "ShadowRoot.prototype.pointerLockElement",
     "ShadowRoot.prototype.prepend",
@@ -5615,6 +5621,8 @@
     "Uint8Array.prototype.filter",
     "Uint8Array.prototype.find",
     "Uint8Array.prototype.findIndex",
+    "Uint8Array.prototype.findLast",
+    "Uint8Array.prototype.findLastIndex",
     "Uint8Array.prototype.forEach",
     "Uint8Array.prototype.includes",
     "Uint8Array.prototype.indexOf",
@@ -6307,6 +6315,33 @@
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
@@ -6561,6 +6596,7 @@
     "XMLDocument.prototype.onselect",
     "XMLDocument.prototype.onselectionchange",
     "XMLDocument.prototype.onselectstart",
+    "XMLDocument.prototype.onslotchange",
     "XMLDocument.prototype.onstalled",
     "XMLDocument.prototype.onsubmit",
     "XMLDocument.prototype.onsuspend",
@@ -7055,6 +7091,7 @@
     "onselect",
     "onselectionchange",
     "onselectstart",
+    "onslotchange",
     "onstalled",
     "onstorage",
     "onsubmit",
```

  
#### 96.0.4664.18 (`2021-10-20`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_96.0.4664.9_to_96.0.4664.18.diff), [json](./browser_apis/chrome-unstable_96.0.4664.9_to_96.0.4664.18.json), [full list](./browser_apis/chrome-unstable_96.0.4664.18.json))
 ```diff
--- ./browser_apis/chrome-unstable_96.0.4664.9.json	2021-11-02 02:21:35.627360334 +0000
+++ ./browser_apis/chrome-unstable_96.0.4664.18.json	2021-11-02 02:21:57.555484290 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "96.0.4664.9",
-  "browserApiCount": 7247,
+  "version": "96.0.4664.18",
+  "browserApiCount": 7248,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -3542,6 +3542,7 @@
     "PerformanceEventTiming",
     "PerformanceEventTiming.prototype",
     "PerformanceEventTiming.prototype.cancelable",
+    "PerformanceEventTiming.prototype.interactionId",
     "PerformanceEventTiming.prototype.processingEnd",
     "PerformanceEventTiming.prototype.processingStart",
     "PerformanceEventTiming.prototype.target",
```

  
#### 96.0.4664.9 (`2021-10-14`) 
No browser API changes.

  
#### 96.0.4662.6 (`2021-10-08`) 
No browser API changes.

  
#### 96.0.4655.0 (`2021-09-28`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_96.0.4651.0_to_96.0.4655.0.diff), [json](./browser_apis/chrome-unstable_96.0.4651.0_to_96.0.4655.0.json), [full list](./browser_apis/chrome-unstable_96.0.4655.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_96.0.4651.0.json	2021-11-02 02:20:30.826996337 +0000
+++ ./browser_apis/chrome-unstable_96.0.4655.0.json	2021-11-02 02:20:52.295116793 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "96.0.4651.0",
-  "browserApiCount": 7246,
+  "version": "96.0.4655.0",
+  "browserApiCount": 7247,
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
```

  
#### 96.0.4651.0 (`2021-09-24`) 
No browser API changes.

  
#### 95.0.4638.17 (`2021-09-21`) 
No browser API changes.

  
#### 95.0.4638.10 (`2021-09-16`) 
No browser API changes.

  
#### 95.0.4636.4 (`2021-09-09`) ⚡
Added 20 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_95.0.4628.3_to_95.0.4636.4.diff), [json](./browser_apis/chrome-unstable_95.0.4628.3_to_95.0.4636.4.json), [full list](./browser_apis/chrome-unstable_95.0.4636.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_95.0.4628.3.json	2021-11-02 02:19:04.178500721 +0000
+++ ./browser_apis/chrome-unstable_95.0.4636.4.json	2021-11-02 02:19:26.450634250 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "95.0.4628.3",
-  "browserApiCount": 7226,
+  "version": "95.0.4636.4",
+  "browserApiCount": 7246,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -5477,6 +5477,18 @@
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
@@ -5764,6 +5776,11 @@
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
@@ -5790,6 +5807,8 @@
     "WebAssembly.Table.prototype.grow",
     "WebAssembly.Table.prototype.length",
     "WebAssembly.Table.prototype.set",
+    "WebAssembly.Tag",
+    "WebAssembly.Tag.prototype",
     "WebAssembly.compile",
     "WebAssembly.compileStreaming",
     "WebAssembly.instantiate",
@@ -7070,6 +7089,7 @@
     "prompt",
     "queueMicrotask",
     "releaseEvents",
+    "reportError",
     "requestAnimationFrame",
     "requestIdleCallback",
     "resizeBy",
```

  
#### 95.0.4628.3 (`2021-09-02`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_95.0.4621.4_to_95.0.4628.3.diff), [json](./browser_apis/chrome-unstable_95.0.4621.4_to_95.0.4628.3.json), [full list](./browser_apis/chrome-unstable_95.0.4628.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_95.0.4621.4.json	2021-11-02 02:18:43.046374697 +0000
+++ ./browser_apis/chrome-unstable_95.0.4628.3.json	2021-11-02 02:19:04.178500721 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "95.0.4621.4",
-  "browserApiCount": 7223,
+  "version": "95.0.4628.3",
+  "browserApiCount": 7226,
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
```

  
#### 95.0.4621.4 (`2021-08-26`) 
No browser API changes.

  
#### 94.0.4606.20 (`2021-08-25`) ⚡
Added 5 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_94.0.4606.12_to_94.0.4606.20.diff), [json](./browser_apis/chrome-unstable_94.0.4606.12_to_94.0.4606.20.json), [full list](./browser_apis/chrome-unstable_94.0.4606.20.json))
 ```diff
--- ./browser_apis/chrome-unstable_94.0.4606.12.json	2021-11-02 02:18:00.122168185 +0000
+++ ./browser_apis/chrome-unstable_94.0.4606.20.json	2021-11-02 02:18:21.234276242 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "94.0.4606.12",
-  "browserApiCount": 7218,
+  "version": "94.0.4606.20",
+  "browserApiCount": 7223,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -3734,6 +3734,11 @@
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
```

  
#### 94.0.4606.12 (`2021-08-19`) ⚡
Added 131 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_94.0.4603.0_to_94.0.4606.12.diff), [json](./browser_apis/chrome-unstable_94.0.4603.0_to_94.0.4606.12.json), [full list](./browser_apis/chrome-unstable_94.0.4606.12.json))
 ```diff
--- ./browser_apis/chrome-unstable_94.0.4603.0.json	2021-11-02 02:17:38.854054612 +0000
+++ ./browser_apis/chrome-unstable_94.0.4606.12.json	2021-11-02 02:18:00.122168185 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "94.0.4603.0",
-  "browserApiCount": 7087,
+  "version": "94.0.4606.12",
+  "browserApiCount": 7218,
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
@@ -1084,6 +1116,20 @@
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
@@ -2228,6 +2274,28 @@
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
     "Ink",
     "Ink.prototype",
     "Ink.prototype.requestPresenter",
@@ -2676,6 +2744,12 @@
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
@@ -4844,6 +4918,9 @@
     "SVGViewElement.prototype.viewBox",
     "SVGViewElement.prototype.viewportElement",
     "SVGViewElement.prototype.zoomAndPan",
+    "Scheduler",
+    "Scheduler.prototype",
+    "Scheduler.prototype.postTask",
     "Scheduling",
     "Scheduling.prototype",
     "Scheduling.prototype.isInputPending",
@@ -5213,6 +5290,16 @@
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
@@ -5561,6 +5648,49 @@
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
@@ -6936,6 +7066,7 @@
     "requestIdleCallback",
     "resizeBy",
     "resizeTo",
+    "scheduler",
     "screen",
     "screenLeft",
     "screenTop",
```

  
#### 94.0.4603.0 (`2021-08-11`) ⚡
Added 12 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_94.0.4595.0_to_94.0.4603.0.diff), [json](./browser_apis/chrome-unstable_94.0.4595.0_to_94.0.4603.0.json), [full list](./browser_apis/chrome-unstable_94.0.4603.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_94.0.4595.0.json	2021-11-02 02:17:17.457932489 +0000
+++ ./browser_apis/chrome-unstable_94.0.4603.0.json	2021-11-02 02:17:38.854054612 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "94.0.4595.0",
-  "browserApiCount": 7075,
+  "version": "94.0.4603.0",
+  "browserApiCount": 7087,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -2774,6 +2774,7 @@
     "Navigator.prototype.mediaSession",
     "Navigator.prototype.mimeTypes",
     "Navigator.prototype.onLine",
+    "Navigator.prototype.pdfViewerEnabled",
     "Navigator.prototype.permissions",
     "Navigator.prototype.platform",
     "Navigator.prototype.plugins",
@@ -2797,6 +2798,7 @@
     "Navigator.prototype.vendor",
     "Navigator.prototype.vendorSub",
     "Navigator.prototype.vibrate",
+    "Navigator.prototype.virtualKeyboard",
     "Navigator.prototype.wakeLock",
     "Navigator.prototype.webdriver",
     "Navigator.prototype.webkitGetUserMedia",
@@ -3304,6 +3306,7 @@
     "Option.prototype.constructor.prototype.title",
     "Option.prototype.constructor.prototype.toggleAttribute",
     "Option.prototype.constructor.prototype.translate",
+    "Option.prototype.constructor.prototype.virtualKeyboardPolicy",
     "Option.prototype.constructor.prototype.webkitMatchesSelector",
     "Option.prototype.constructor.prototype.webkitRequestFullScreen",
     "Option.prototype.constructor.prototype.webkitRequestFullscreen",
@@ -5564,6 +5567,15 @@
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
```

  
#### 94.0.4595.0 (`2021-08-03`) ⚡
Added 9 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_93.0.4577.18_to_94.0.4595.0.diff), [json](./browser_apis/chrome-unstable_93.0.4577.18_to_94.0.4595.0.json), [full list](./browser_apis/chrome-unstable_94.0.4595.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_93.0.4577.18.json	2021-11-02 02:16:56.477810185 +0000
+++ ./browser_apis/chrome-unstable_94.0.4595.0.json	2021-11-02 02:17:17.457932489 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "93.0.4577.18",
-  "browserApiCount": 7066,
+  "version": "94.0.4595.0",
+  "browserApiCount": 7075,
   "browserApis": [
     "AbortController",
     "AbortController.prototype",
@@ -984,6 +984,11 @@
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
@@ -2223,6 +2228,9 @@
     "ImageData.prototype.data",
     "ImageData.prototype.height",
     "ImageData.prototype.width",
+    "Ink",
+    "Ink.prototype",
+    "Ink.prototype.requestPresenter",
     "InputDeviceCapabilities",
     "InputDeviceCapabilities.prototype",
     "InputDeviceCapabilities.prototype.firesTouchEvents",
@@ -2753,6 +2761,7 @@
     "Navigator.prototype.getUserMedia",
     "Navigator.prototype.hardwareConcurrency",
     "Navigator.prototype.hid",
+    "Navigator.prototype.ink",
     "Navigator.prototype.javaEnabled",
     "Navigator.prototype.keyboard",
     "Navigator.prototype.language",
```

  
#### 93.0.4577.18 (`2021-07-29`) 
No browser API changes.

  
#### 93.0.4577.15 (`2021-07-27`) 
No browser API changes.

  
#### 93.0.4577.8 (`2021-07-21`) 
No browser API changes.

  
#### 93.0.4573.0 (`2021-07-13`) 
No browser API changes.

  <!-- browserapis:end -->
