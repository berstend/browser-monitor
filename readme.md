# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 107.0.5304.87 (`2022-10-27`) 
No browser API changes.

  
#### 107.0.5304.68 (`2022-10-25`) ⚡
Added 11 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_106.0.5249.119_to_107.0.5304.68.diff), [json](./browser_apis/chrome-stable_106.0.5249.119_to_107.0.5304.68.json), [full list](./browser_apis/chrome-stable_107.0.5304.68.json))
 ```diff
--- ./browser_apis/chrome-stable_106.0.5249.119.json	2022-11-09 12:36:17.089267919 +0000
+++ ./browser_apis/chrome-stable_107.0.5304.68.json	2022-11-09 12:36:17.093267968 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "106.0.0.0",
-  "browserApiCount": 7538,
+  "version": "107.0.0.0",
+  "browserApiCount": 7549,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1129,6 +1129,8 @@
     "ElementInternals.prototype",
     "ElementInternals.prototype.ariaAtomic",
     "ElementInternals.prototype.ariaAutoComplete",
+    "ElementInternals.prototype.ariaBrailleLabel",
+    "ElementInternals.prototype.ariaBrailleRoleDescription",
     "ElementInternals.prototype.ariaBusy",
     "ElementInternals.prototype.ariaChecked",
     "ElementInternals.prototype.ariaColCount",
@@ -3287,6 +3289,8 @@
     "Option.prototype.constructor.prototype.append",
     "Option.prototype.constructor.prototype.ariaAtomic",
     "Option.prototype.constructor.prototype.ariaAutoComplete",
+    "Option.prototype.constructor.prototype.ariaBrailleLabel",
+    "Option.prototype.constructor.prototype.ariaBrailleRoleDescription",
     "Option.prototype.constructor.prototype.ariaBusy",
     "Option.prototype.constructor.prototype.ariaChecked",
     "Option.prototype.constructor.prototype.ariaColCount",
@@ -3789,6 +3793,7 @@
     "PerformanceResourceTiming.prototype.nextHopProtocol",
     "PerformanceResourceTiming.prototype.redirectEnd",
     "PerformanceResourceTiming.prototype.redirectStart",
+    "PerformanceResourceTiming.prototype.renderBlockingStatus",
     "PerformanceResourceTiming.prototype.requestStart",
     "PerformanceResourceTiming.prototype.responseEnd",
     "PerformanceResourceTiming.prototype.responseStart",
@@ -6987,6 +6992,10 @@
     "XRCPUDepthInformation.prototype.normDepthBufferFromNormView",
     "XRCPUDepthInformation.prototype.rawValueToMeters",
     "XRCPUDepthInformation.prototype.width",
+    "XRCamera",
+    "XRCamera.prototype",
+    "XRCamera.prototype.height",
+    "XRCamera.prototype.width",
     "XRDOMOverlayState",
     "XRDOMOverlayState.prototype",
     "XRDOMOverlayState.prototype.type",
@@ -7110,6 +7119,7 @@
     "XRTransientInputHitTestSource.prototype.cancel",
     "XRView",
     "XRView.prototype",
+    "XRView.prototype.camera",
     "XRView.prototype.eye",
     "XRView.prototype.isFirstPersonObserver",
     "XRView.prototype.projectionMatrix",
@@ -7127,6 +7137,7 @@
     "XRViewport.prototype.y",
     "XRWebGLBinding",
     "XRWebGLBinding.prototype",
+    "XRWebGLBinding.prototype.getCameraImage",
     "XRWebGLBinding.prototype.getDepthInformation",
     "XRWebGLBinding.prototype.getReflectionCubeMap",
     "XRWebGLDepthInformation",
```

  
#### 106.0.5249.119 (`2022-10-11`) 
No browser API changes.

  
#### 106.0.5249.103 (`2022-10-6`) 
No browser API changes.

  
#### 106.0.5249.91 (`2022-9-30`) 
No browser API changes.

  
#### 106.0.5249.61 (`2022-9-27`) ⚡
Added 9 APIs, removed 9 (see: [diff](./browser_apis/chrome-stable_105.0.5195.125_to_106.0.5249.61.diff), [json](./browser_apis/chrome-stable_105.0.5195.125_to_106.0.5249.61.json), [full list](./browser_apis/chrome-stable_106.0.5249.61.json))
 ```diff
--- ./browser_apis/chrome-stable_105.0.5195.125.json	2022-11-09 12:36:17.085267870 +0000
+++ ./browser_apis/chrome-stable_106.0.5249.61.json	2022-11-09 12:36:17.089267919 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "version": "105.0.0.0",
+  "version": "106.0.0.0",
   "browserApiCount": 7538,
   "browserApis": [
     "AbsoluteOrientationSensor",
@@ -234,6 +234,7 @@
     "AudioDecoder.prototype.decode",
     "AudioDecoder.prototype.decodeQueueSize",
     "AudioDecoder.prototype.flush",
+    "AudioDecoder.prototype.ondequeue",
     "AudioDecoder.prototype.reset",
     "AudioDecoder.prototype.state",
     "AudioDestinationNode",
@@ -247,6 +248,7 @@
     "AudioEncoder.prototype.encode",
     "AudioEncoder.prototype.encodeQueueSize",
     "AudioEncoder.prototype.flush",
+    "AudioEncoder.prototype.ondequeue",
     "AudioEncoder.prototype.reset",
     "AudioEncoder.prototype.state",
     "AudioListener",
@@ -2500,6 +2502,8 @@
     "Intl.NumberFormat",
     "Intl.NumberFormat.prototype",
     "Intl.NumberFormat.prototype.format",
+    "Intl.NumberFormat.prototype.formatRange",
+    "Intl.NumberFormat.prototype.formatRangeToParts",
     "Intl.NumberFormat.prototype.formatToParts",
     "Intl.NumberFormat.prototype.resolvedOptions",
     "Intl.NumberFormat.supportedLocalesOf",
@@ -2507,6 +2511,7 @@
     "Intl.PluralRules.prototype",
     "Intl.PluralRules.prototype.resolvedOptions",
     "Intl.PluralRules.prototype.select",
+    "Intl.PluralRules.prototype.selectRange",
     "Intl.PluralRules.supportedLocalesOf",
     "Intl.RelativeTimeFormat",
     "Intl.RelativeTimeFormat.prototype",
@@ -5012,6 +5017,7 @@
     "SVGUseElement.prototype.y",
     "SVGViewElement",
     "SVGViewElement.prototype",
+    "SVGViewElement.prototype.attributeStyleMap",
     "SVGViewElement.prototype.autofocus",
     "SVGViewElement.prototype.blur",
     "SVGViewElement.prototype.className",
@@ -5919,6 +5925,7 @@
     "VideoDecoder.prototype.decode",
     "VideoDecoder.prototype.decodeQueueSize",
     "VideoDecoder.prototype.flush",
+    "VideoDecoder.prototype.ondequeue",
     "VideoDecoder.prototype.reset",
     "VideoDecoder.prototype.state",
     "VideoEncoder",
@@ -5929,6 +5936,7 @@
     "VideoEncoder.prototype.encode",
     "VideoEncoder.prototype.encodeQueueSize",
     "VideoEncoder.prototype.flush",
+    "VideoEncoder.prototype.ondequeue",
     "VideoEncoder.prototype.reset",
     "VideoEncoder.prototype.state",
     "VideoFrame",
@@ -7163,15 +7171,6 @@
     "chrome.csi.prototype",
     "chrome.loadTimes",
     "chrome.loadTimes.prototype",
-    "chrome.runtime",
-    "chrome.runtime.OnInstalledReason",
-    "chrome.runtime.OnRestartRequiredReason",
-    "chrome.runtime.PlatformArch",
-    "chrome.runtime.PlatformNaclArch",
-    "chrome.runtime.PlatformOs",
-    "chrome.runtime.RequestUpdateCheckStatus",
-    "chrome.runtime.connect",
-    "chrome.runtime.sendMessage",
     "clearInterval",
     "clearTimeout",
     "clientInformation",
@@ -7184,6 +7183,7 @@
     "console.context",
     "console.count",
     "console.countReset",
+    "console.createTask",
     "console.debug",
     "console.dir",
     "console.dirxml",
```

  
#### 105.0.5195.125 (`2022-9-13`) 
No browser API changes.

  
#### 105.0.5195.102 (`2022-9-2`) ⚡
Added 0 APIs, removed 4 (see: [diff](./browser_apis/chrome-stable_105.0.5195.52_to_105.0.5195.102.diff), [json](./browser_apis/chrome-stable_105.0.5195.52_to_105.0.5195.102.json), [full list](./browser_apis/chrome-stable_105.0.5195.102.json))
 ```diff
--- ./browser_apis/chrome-stable_105.0.5195.52.json	2022-11-09 12:36:17.085267870 +0000
+++ ./browser_apis/chrome-stable_105.0.5195.102.json	2022-11-09 12:36:17.085267870 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
   "version": "105.0.0.0",
-  "browserApiCount": 7542,
+  "browserApiCount": 7538,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2821,7 +2821,6 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
-    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2829,7 +2828,6 @@
     "MediaSource.prototype.clearLiveSeekableRange",
     "MediaSource.prototype.duration",
     "MediaSource.prototype.endOfStream",
-    "MediaSource.prototype.handle",
     "MediaSource.prototype.onsourceclose",
     "MediaSource.prototype.onsourceended",
     "MediaSource.prototype.onsourceopen",
@@ -2837,8 +2835,6 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
-    "MediaSourceHandle",
-    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
```

  
#### 105.0.5195.52 (`2022-8-30`) ⚡
Added 82 APIs, removed 13 (see: [diff](./browser_apis/chrome-stable_104.0.5112.101_to_105.0.5195.52.diff), [json](./browser_apis/chrome-stable_104.0.5112.101_to_105.0.5195.52.json), [full list](./browser_apis/chrome-stable_105.0.5195.52.json))
 ```diff
--- ./browser_apis/chrome-stable_104.0.5112.101.json	2022-11-09 12:36:17.085267870 +0000
+++ ./browser_apis/chrome-stable_105.0.5195.52.json	2022-11-09 12:36:17.085267870 +0000
@@ -1,20 +1,8 @@
 {
   "browser": "chrome-stable",
-  "version": "104.0.5112.101",
-  "browserApiCount": 7473,
+  "version": "105.0.0.0",
+  "browserApiCount": 7542,
   "browserApis": [
-    "AbortController",
-    "AbortController.prototype",
-    "AbortController.prototype.abort",
-    "AbortController.prototype.signal",
-    "AbortSignal",
-    "AbortSignal.abort",
-    "AbortSignal.prototype",
-    "AbortSignal.prototype.aborted",
-    "AbortSignal.prototype.onabort",
-    "AbortSignal.prototype.reason",
-    "AbortSignal.prototype.throwIfAborted",
-    "AbortSignal.timeout",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -417,6 +405,12 @@
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
@@ -426,6 +420,7 @@
     "CSS.ex",
     "CSS.fr",
     "CSS.grad",
+    "CSS.highlights",
     "CSS.in",
     "CSS.kHz",
     "CSS.mm",
@@ -449,6 +444,8 @@
     "CSSAnimation",
     "CSSAnimation.prototype",
     "CSSAnimation.prototype.animationName",
+    "CSSContainerRule",
+    "CSSContainerRule.prototype",
     "CSSCounterStyleRule",
     "CSSCounterStyleRule.prototype",
     "CSSCounterStyleRule.prototype.additiveSymbols",
@@ -1788,6 +1785,7 @@
     "HTMLLinkElement",
     "HTMLLinkElement.prototype",
     "HTMLLinkElement.prototype.as",
+    "HTMLLinkElement.prototype.blocking",
     "HTMLLinkElement.prototype.charset",
     "HTMLLinkElement.prototype.crossOrigin",
     "HTMLLinkElement.prototype.disabled",
@@ -1936,6 +1934,7 @@
     "HTMLScriptElement",
     "HTMLScriptElement.prototype",
     "HTMLScriptElement.prototype.async",
+    "HTMLScriptElement.prototype.blocking",
     "HTMLScriptElement.prototype.charset",
     "HTMLScriptElement.prototype.crossOrigin",
     "HTMLScriptElement.prototype.defer",
@@ -1994,6 +1993,7 @@
     "HTMLSpanElement.prototype",
     "HTMLStyleElement",
     "HTMLStyleElement.prototype",
+    "HTMLStyleElement.prototype.blocking",
     "HTMLStyleElement.prototype.disabled",
     "HTMLStyleElement.prototype.media",
     "HTMLStyleElement.prototype.sheet",
@@ -2167,6 +2167,31 @@
     "Headers.prototype.keys",
     "Headers.prototype.set",
     "Headers.prototype.values",
+    "Highlight",
+    "Highlight.prototype",
+    "Highlight.prototype.add",
+    "Highlight.prototype.clear",
+    "Highlight.prototype.delete",
+    "Highlight.prototype.entries",
+    "Highlight.prototype.forEach",
+    "Highlight.prototype.has",
+    "Highlight.prototype.keys",
+    "Highlight.prototype.priority",
+    "Highlight.prototype.size",
+    "Highlight.prototype.type",
+    "Highlight.prototype.values",
+    "HighlightRegistry",
+    "HighlightRegistry.prototype",
+    "HighlightRegistry.prototype.clear",
+    "HighlightRegistry.prototype.delete",
+    "HighlightRegistry.prototype.entries",
+    "HighlightRegistry.prototype.forEach",
+    "HighlightRegistry.prototype.get",
+    "HighlightRegistry.prototype.has",
+    "HighlightRegistry.prototype.keys",
+    "HighlightRegistry.prototype.set",
+    "HighlightRegistry.prototype.size",
+    "HighlightRegistry.prototype.values",
     "History",
     "History.prototype",
     "History.prototype.back",
@@ -2796,6 +2821,7 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
+    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2803,6 +2829,7 @@
     "MediaSource.prototype.clearLiveSeekableRange",
     "MediaSource.prototype.duration",
     "MediaSource.prototype.endOfStream",
+    "MediaSource.prototype.handle",
     "MediaSource.prototype.onsourceclose",
     "MediaSource.prototype.onsourceended",
     "MediaSource.prototype.onsourceopen",
@@ -2810,6 +2837,8 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
+    "MediaSourceHandle",
+    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
@@ -2890,14 +2919,17 @@
     "NamedNodeMap.prototype.setNamedItemNS",
     "NavigateEvent",
     "NavigateEvent.prototype",
+    "NavigateEvent.prototype.canIntercept",
     "NavigateEvent.prototype.canTransition",
     "NavigateEvent.prototype.destination",
     "NavigateEvent.prototype.downloadRequest",
     "NavigateEvent.prototype.formData",
     "NavigateEvent.prototype.hashChange",
     "NavigateEvent.prototype.info",
+    "NavigateEvent.prototype.intercept",
     "NavigateEvent.prototype.navigationType",
     "NavigateEvent.prototype.restoreScroll",
+    "NavigateEvent.prototype.scroll",
     "NavigateEvent.prototype.signal",
     "NavigateEvent.prototype.transitionWhile",
     "NavigateEvent.prototype.userInitiated",
@@ -3012,6 +3044,7 @@
     "Navigator.prototype.webkitGetUserMedia",
     "Navigator.prototype.webkitPersistentStorage",
     "Navigator.prototype.webkitTemporaryStorage",
+    "Navigator.prototype.windowControlsOverlay",
     "Navigator.prototype.xr",
     "NavigatorManagedData",
     "NavigatorManagedData.prototype",
@@ -3299,6 +3332,7 @@
     "Option.prototype.constructor.prototype.autofocus",
     "Option.prototype.constructor.prototype.before",
     "Option.prototype.constructor.prototype.blur",
+    "Option.prototype.constructor.prototype.checkVisibility",
     "Option.prototype.constructor.prototype.childElementCount",
     "Option.prototype.constructor.prototype.children",
     "Option.prototype.constructor.prototype.classList",
@@ -3398,6 +3432,7 @@
     "Option.prototype.constructor.prototype.onauxclick",
     "Option.prototype.constructor.prototype.onbeforecopy",
     "Option.prototype.constructor.prototype.onbeforecut",
+    "Option.prototype.constructor.prototype.onbeforeinput",
     "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
     "Option.prototype.constructor.prototype.onbeforexrselect",
@@ -3524,6 +3559,7 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
+    "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.slot",
@@ -4263,6 +4299,7 @@
     "Request.prototype",
     "Request.prototype.arrayBuffer",
     "Request.prototype.blob",
+    "Request.prototype.body",
     "Request.prototype.bodyUsed",
     "Request.prototype.cache",
     "Request.prototype.clone",
@@ -4300,6 +4337,7 @@
     "ResizeObserverSize.prototype.inlineSize",
     "Response",
     "Response.error",
+    "Response.json",
     "Response.prototype",
     "Response.prototype.arrayBuffer",
     "Response.prototype.blob",
@@ -4990,6 +5028,7 @@
     "SVGViewElement.prototype.onanimationiteration",
     "SVGViewElement.prototype.onanimationstart",
     "SVGViewElement.prototype.onauxclick",
+    "SVGViewElement.prototype.onbeforeinput",
     "SVGViewElement.prototype.onbeforematch",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
@@ -5086,6 +5125,10 @@
     "SVGViewElement.prototype.viewBox",
     "SVGViewElement.prototype.viewportElement",
     "SVGViewElement.prototype.zoomAndPan",
+    "Sanitizer",
+    "Sanitizer.getDefaultConfiguration",
+    "Sanitizer.prototype",
+    "Sanitizer.prototype.getConfiguration",
     "Scheduler",
     "Scheduler.prototype",
     "Scheduler.prototype.postTask",
@@ -5478,14 +5521,24 @@
     "TaskAttributionTiming.prototype.toJSON",
     "TaskController",
     "TaskController.prototype",
+    "TaskController.prototype.abort",
+    "TaskController.prototype.constructor",
     "TaskController.prototype.setPriority",
+    "TaskController.prototype.signal",
     "TaskPriorityChangeEvent",
     "TaskPriorityChangeEvent.prototype",
     "TaskPriorityChangeEvent.prototype.previousPriority",
     "TaskSignal",
     "TaskSignal.prototype",
+    "TaskSignal.prototype.aborted",
+    "TaskSignal.prototype.constructor",
+    "TaskSignal.prototype.constructor.abort",
+    "TaskSignal.prototype.constructor.timeout",
+    "TaskSignal.prototype.onabort",
     "TaskSignal.prototype.onprioritychange",
     "TaskSignal.prototype.priority",
+    "TaskSignal.prototype.reason",
+    "TaskSignal.prototype.throwIfAborted",
     "Text",
     "Text.prototype",
     "Text.prototype.after",
@@ -5603,6 +5656,12 @@
     "TransformStream.prototype",
     "TransformStream.prototype.readable",
     "TransformStream.prototype.writable",
+    "TransformStreamDefaultController",
+    "TransformStreamDefaultController.prototype",
+    "TransformStreamDefaultController.prototype.desiredSize",
+    "TransformStreamDefaultController.prototype.enqueue",
+    "TransformStreamDefaultController.prototype.error",
+    "TransformStreamDefaultController.prototype.terminate",
     "TransitionEvent",
     "TransitionEvent.prototype",
     "TransitionEvent.prototype.elapsedTime",
@@ -5959,7 +6018,6 @@
     "WebAssembly.CompileError.prototype",
     "WebAssembly.Exception",
     "WebAssembly.Exception.prototype",
-    "WebAssembly.Exception.prototype.constructor",
     "WebAssembly.Exception.prototype.getArg",
     "WebAssembly.Exception.prototype.is",
     "WebAssembly.Global",
@@ -6579,6 +6637,15 @@
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
@@ -6694,6 +6761,7 @@
     "XMLDocument.prototype.onauxclick",
     "XMLDocument.prototype.onbeforecopy",
     "XMLDocument.prototype.onbeforecut",
+    "XMLDocument.prototype.onbeforeinput",
     "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
     "XMLDocument.prototype.onbeforexrselect",
@@ -7191,6 +7259,7 @@
     "onanimationstart",
     "onappinstalled",
     "onauxclick",
+    "onbeforeinput",
     "onbeforeinstallprompt",
     "onbeforematch",
     "onbeforeprint",
```

  
#### 104.0.5112.101 (`2022-8-16`) 
No browser API changes.

  
#### 104.0.5112.79 (`2022-8-2`) ⚡
Added 10 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_103.0.5060.134_to_104.0.5112.79.diff), [json](./browser_apis/chrome-stable_103.0.5060.134_to_104.0.5112.79.json), [full list](./browser_apis/chrome-stable_104.0.5112.79.json))
 ```diff
--- ./browser_apis/chrome-stable_103.0.5060.134.json	2022-11-09 12:36:17.085267870 +0000
+++ ./browser_apis/chrome-stable_104.0.5112.79.json	2022-11-09 12:36:17.085267870 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-stable",
-  "version": "103.0.5060.134",
-  "browserApiCount": 7463,
+  "version": "104.0.5112.79",
+  "browserApiCount": 7473,
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
@@ -6068,6 +6074,7 @@
     "WebGL2RenderingContext.prototype.drawElements",
     "WebGL2RenderingContext.prototype.drawElementsInstanced",
     "WebGL2RenderingContext.prototype.drawRangeElements",
+    "WebGL2RenderingContext.prototype.drawingBufferColorSpace",
     "WebGL2RenderingContext.prototype.drawingBufferHeight",
     "WebGL2RenderingContext.prototype.drawingBufferWidth",
     "WebGL2RenderingContext.prototype.enable",
@@ -6200,6 +6207,7 @@
     "WebGL2RenderingContext.prototype.uniformMatrix4fv",
     "WebGL2RenderingContext.prototype.uniformMatrix4x2fv",
     "WebGL2RenderingContext.prototype.uniformMatrix4x3fv",
+    "WebGL2RenderingContext.prototype.unpackColorSpace",
     "WebGL2RenderingContext.prototype.useProgram",
     "WebGL2RenderingContext.prototype.validateProgram",
     "WebGL2RenderingContext.prototype.vertexAttrib1f",
@@ -6286,6 +6294,7 @@
     "WebGLRenderingContext.prototype.disableVertexAttribArray",
     "WebGLRenderingContext.prototype.drawArrays",
     "WebGLRenderingContext.prototype.drawElements",
+    "WebGLRenderingContext.prototype.drawingBufferColorSpace",
     "WebGLRenderingContext.prototype.drawingBufferHeight",
     "WebGLRenderingContext.prototype.drawingBufferWidth",
     "WebGLRenderingContext.prototype.enable",
@@ -6367,6 +6376,7 @@
     "WebGLRenderingContext.prototype.uniformMatrix2fv",
     "WebGLRenderingContext.prototype.uniformMatrix3fv",
     "WebGLRenderingContext.prototype.uniformMatrix4fv",
+    "WebGLRenderingContext.prototype.unpackColorSpace",
     "WebGLRenderingContext.prototype.useProgram",
     "WebGLRenderingContext.prototype.validateProgram",
     "WebGLRenderingContext.prototype.vertexAttrib1f",
```

  
#### 103.0.5060.134 (`2022-7-19`) 
No browser API changes.

  
#### 103.0.5060.114 (`2022-7-4`) 
No browser API changes.

  
#### 103.0.5060.53 (`2022-6-21`) ⚡
Added 12 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_102.0.5005.115_to_103.0.5060.53.diff), [json](./browser_apis/chrome-stable_102.0.5005.115_to_103.0.5060.53.json), [full list](./browser_apis/chrome-stable_103.0.5060.53.json))
 ```diff
--- ./browser_apis/chrome-stable_102.0.5005.115.json	2022-11-09 12:36:17.081267821 +0000
+++ ./browser_apis/chrome-stable_103.0.5060.53.json	2022-11-09 12:36:17.085267870 +0000
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
--- ./browser_apis/chrome-stable_101.0.4951.64.json	2022-11-09 12:36:17.081267821 +0000
+++ ./browser_apis/chrome-stable_102.0.5005.61.json	2022-11-09 12:36:17.081267821 +0000
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
--- ./browser_apis/chrome-stable_100.0.4896.127.json	2022-11-09 12:36:17.077267772 +0000
+++ ./browser_apis/chrome-stable_101.0.4951.41.json	2022-11-09 12:36:17.081267821 +0000
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
--- ./browser_apis/chrome-stable_99.0.4844.84.json	2022-11-09 12:36:17.113268212 +0000
+++ ./browser_apis/chrome-stable_100.0.4896.60.json	2022-11-09 12:36:17.081267821 +0000
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
--- ./browser_apis/chrome-stable_98.0.4758.102.json	2022-11-09 12:36:17.109268163 +0000
+++ ./browser_apis/chrome-stable_99.0.4844.51.json	2022-11-09 12:36:17.113268212 +0000
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
--- ./browser_apis/chrome-stable_97.0.4692.99.json	2022-11-09 12:36:17.109268163 +0000
+++ ./browser_apis/chrome-stable_98.0.4758.80.json	2022-11-09 12:36:17.109268163 +0000
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

  
### chrome-unstable
  
#### 109.0.5396.2 (`2022-11-3`) 
No browser API changes.

  
#### 109.0.5384.0 (`2022-10-28`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_108.0.5359.19_to_109.0.5384.0.diff), [json](./browser_apis/chrome-unstable_108.0.5359.19_to_109.0.5384.0.json), [full list](./browser_apis/chrome-unstable_109.0.5384.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_108.0.5359.19.json	2022-11-09 12:36:17.129268408 +0000
+++ ./browser_apis/chrome-unstable_109.0.5384.0.json	2022-11-09 12:36:17.133268457 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "108.0.0.0",
-  "browserApiCount": 7585,
+  "version": "109.0.0.0",
+  "browserApiCount": 7586,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3830,6 +3830,7 @@
     "PerformanceResourceTiming.prototype.requestStart",
     "PerformanceResourceTiming.prototype.responseEnd",
     "PerformanceResourceTiming.prototype.responseStart",
+    "PerformanceResourceTiming.prototype.responseStatus",
     "PerformanceResourceTiming.prototype.secureConnectionStart",
     "PerformanceResourceTiming.prototype.serverTiming",
     "PerformanceResourceTiming.prototype.toJSON",
```

  
#### 108.0.5359.19 (`2022-10-26`) 
No browser API changes.

  
#### 108.0.5359.10 (`2022-10-19`) ⚡
Added 23 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_108.0.5355.0_to_108.0.5359.10.diff), [json](./browser_apis/chrome-unstable_108.0.5355.0_to_108.0.5359.10.json), [full list](./browser_apis/chrome-unstable_108.0.5359.10.json))
 ```diff
--- ./browser_apis/chrome-unstable_108.0.5355.0.json	2022-11-09 12:36:17.129268408 +0000
+++ ./browser_apis/chrome-unstable_108.0.5359.10.json	2022-11-09 12:36:17.129268408 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "108.0.0.0",
-  "browserApiCount": 7562,
+  "browserApiCount": 7585,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -419,6 +419,12 @@
     "CSS.dpcm",
     "CSS.dpi",
     "CSS.dppx",
+    "CSS.dvb",
+    "CSS.dvh",
+    "CSS.dvi",
+    "CSS.dvmax",
+    "CSS.dvmin",
+    "CSS.dvw",
     "CSS.em",
     "CSS.escape",
     "CSS.ex",
@@ -427,6 +433,12 @@
     "CSS.highlights",
     "CSS.in",
     "CSS.kHz",
+    "CSS.lvb",
+    "CSS.lvh",
+    "CSS.lvi",
+    "CSS.lvmax",
+    "CSS.lvmin",
+    "CSS.lvw",
     "CSS.mm",
     "CSS.ms",
     "CSS.number",
@@ -440,8 +452,16 @@
     "CSS.rem",
     "CSS.s",
     "CSS.supports",
+    "CSS.svb",
+    "CSS.svh",
+    "CSS.svi",
+    "CSS.svmax",
+    "CSS.svmin",
+    "CSS.svw",
     "CSS.turn",
+    "CSS.vb",
     "CSS.vh",
+    "CSS.vi",
     "CSS.vmax",
     "CSS.vmin",
     "CSS.vw",
@@ -2327,6 +2347,9 @@
     "IIRFilterNode",
     "IIRFilterNode.prototype",
     "IIRFilterNode.prototype.getFrequencyResponse",
+    "IdentityCredential",
+    "IdentityCredential.prototype",
+    "IdentityCredential.prototype.token",
     "IdleDeadline",
     "IdleDeadline.prototype",
     "IdleDeadline.prototype.didTimeout",
```

  
#### 108.0.5355.0 (`2022-10-13`) 
No browser API changes.

  
#### 108.0.5343.2 (`2022-10-7`) ⚡
Added 13 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_108.0.5327.0_to_108.0.5343.2.diff), [json](./browser_apis/chrome-unstable_108.0.5327.0_to_108.0.5343.2.json), [full list](./browser_apis/chrome-unstable_108.0.5343.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_108.0.5327.0.json	2022-11-09 12:36:17.129268408 +0000
+++ ./browser_apis/chrome-unstable_108.0.5343.2.json	2022-11-09 12:36:17.129268408 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "108.0.0.0",
-  "browserApiCount": 7551,
+  "browserApiCount": 7562,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -821,6 +821,9 @@
     "ConstantSourceNode",
     "ConstantSourceNode.prototype",
     "ConstantSourceNode.prototype.offset",
+    "ContentVisibilityAutoStateChangedEvent",
+    "ContentVisibilityAutoStateChangedEvent.prototype",
+    "ContentVisibilityAutoStateChangedEvent.prototype.skipped",
     "ConvolverNode",
     "ConvolverNode.prototype",
     "ConvolverNode.prototype.buffer",
@@ -2832,6 +2835,7 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
+    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2846,6 +2850,8 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
+    "MediaSourceHandle",
+    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
@@ -3450,6 +3456,7 @@
     "Option.prototype.constructor.prototype.onchange",
     "Option.prototype.constructor.prototype.onclick",
     "Option.prototype.constructor.prototype.onclose",
+    "Option.prototype.constructor.prototype.oncontentvisibilityautostatechanged",
     "Option.prototype.constructor.prototype.oncontextlost",
     "Option.prototype.constructor.prototype.oncontextmenu",
     "Option.prototype.constructor.prototype.oncontextrestored",
@@ -3758,6 +3765,7 @@
     "PerformanceNavigation.prototype.type",
     "PerformanceNavigationTiming",
     "PerformanceNavigationTiming.prototype",
+    "PerformanceNavigationTiming.prototype.activationStart",
     "PerformanceNavigationTiming.prototype.domComplete",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventEnd",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventStart",
@@ -5048,6 +5056,7 @@
     "SVGViewElement.prototype.onchange",
     "SVGViewElement.prototype.onclick",
     "SVGViewElement.prototype.onclose",
+    "SVGViewElement.prototype.oncontentvisibilityautostatechanged",
     "SVGViewElement.prototype.oncontextlost",
     "SVGViewElement.prototype.oncontextmenu",
     "SVGViewElement.prototype.oncontextrestored",
@@ -6783,6 +6792,7 @@
     "XMLDocument.prototype.onchange",
     "XMLDocument.prototype.onclick",
     "XMLDocument.prototype.onclose",
+    "XMLDocument.prototype.oncontentvisibilityautostatechanged",
     "XMLDocument.prototype.oncontextlost",
     "XMLDocument.prototype.oncontextmenu",
     "XMLDocument.prototype.oncontextrestored",
@@ -6840,6 +6850,7 @@
     "XMLDocument.prototype.onpointerover",
     "XMLDocument.prototype.onpointerrawupdate",
     "XMLDocument.prototype.onpointerup",
+    "XMLDocument.prototype.onprerenderingchange",
     "XMLDocument.prototype.onprogress",
     "XMLDocument.prototype.onratechange",
     "XMLDocument.prototype.onreadystatechange",
@@ -6880,6 +6891,7 @@
     "XMLDocument.prototype.plugins",
     "XMLDocument.prototype.pointerLockElement",
     "XMLDocument.prototype.prepend",
+    "XMLDocument.prototype.prerendering",
     "XMLDocument.prototype.queryCommandEnabled",
     "XMLDocument.prototype.queryCommandIndeterm",
     "XMLDocument.prototype.queryCommandState",
@@ -7223,8 +7235,6 @@
     "customElements",
     "decodeURI",
     "decodeURIComponent",
-    "defaultStatus",
-    "defaultstatus",
     "devicePixelRatio",
     "document",
     "encodeURI",
@@ -7281,6 +7291,7 @@
     "onchange",
     "onclick",
     "onclose",
+    "oncontentvisibilityautostatechanged",
     "oncontextlost",
     "oncontextmenu",
     "oncontextrestored",
```

  
#### 108.0.5327.0 (`2022-9-29`) ⚡
Added 5 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_107.0.5304.18_to_108.0.5327.0.diff), [json](./browser_apis/chrome-unstable_107.0.5304.18_to_108.0.5327.0.json), [full list](./browser_apis/chrome-unstable_108.0.5327.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_107.0.5304.18.json	2022-11-09 12:36:17.129268408 +0000
+++ ./browser_apis/chrome-unstable_108.0.5327.0.json	2022-11-09 12:36:17.129268408 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "107.0.0.0",
-  "browserApiCount": 7548,
+  "version": "108.0.0.0",
+  "browserApiCount": 7551,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -90,6 +90,8 @@
     "Array.prototype.flat",
     "Array.prototype.flatMap",
     "Array.prototype.forEach",
+    "Array.prototype.group",
+    "Array.prototype.groupToMap",
     "Array.prototype.includes",
     "Array.prototype.indexOf",
     "Array.prototype.join",
@@ -1632,6 +1634,8 @@
     "HTMLFormElement.prototype.method",
     "HTMLFormElement.prototype.name",
     "HTMLFormElement.prototype.noValidate",
+    "HTMLFormElement.prototype.rel",
+    "HTMLFormElement.prototype.relList",
     "HTMLFormElement.prototype.reportValidity",
     "HTMLFormElement.prototype.requestSubmit",
     "HTMLFormElement.prototype.reset",
@@ -2931,10 +2935,8 @@
     "NavigateEvent.prototype.info",
     "NavigateEvent.prototype.intercept",
     "NavigateEvent.prototype.navigationType",
-    "NavigateEvent.prototype.restoreScroll",
     "NavigateEvent.prototype.scroll",
     "NavigateEvent.prototype.signal",
-    "NavigateEvent.prototype.transitionWhile",
     "NavigateEvent.prototype.userInitiated",
     "Navigation",
     "Navigation.prototype",
@@ -3961,6 +3963,7 @@
     "Proxy",
     "Proxy.revocable",
     "PublicKeyCredential",
+    "PublicKeyCredential.isConditionalMediationAvailable",
     "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable",
     "PublicKeyCredential.prototype",
     "PublicKeyCredential.prototype.authenticatorAttachment",
```

  
#### 107.0.5304.18 (`2022-9-28`) 
No browser API changes.

  
#### 107.0.5304.10 (`2022-9-22`) ⚡
Added 6 APIs, removed 4 (see: [diff](./browser_apis/chrome-unstable_107.0.5300.0_to_107.0.5304.10.diff), [json](./browser_apis/chrome-unstable_107.0.5300.0_to_107.0.5304.10.json), [full list](./browser_apis/chrome-unstable_107.0.5304.10.json))
 ```diff
--- ./browser_apis/chrome-unstable_107.0.5300.0.json	2022-11-09 12:36:17.129268408 +0000
+++ ./browser_apis/chrome-unstable_107.0.5304.10.json	2022-11-09 12:36:17.129268408 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "107.0.0.0",
-  "browserApiCount": 7546,
+  "browserApiCount": 7548,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2828,7 +2828,6 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
-    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2836,7 +2835,6 @@
     "MediaSource.prototype.clearLiveSeekableRange",
     "MediaSource.prototype.duration",
     "MediaSource.prototype.endOfStream",
-    "MediaSource.prototype.handle",
     "MediaSource.prototype.onsourceclose",
     "MediaSource.prototype.onsourceended",
     "MediaSource.prototype.onsourceopen",
@@ -2844,8 +2842,6 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
-    "MediaSourceHandle",
-    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
@@ -6995,6 +6991,10 @@
     "XRCPUDepthInformation.prototype.normDepthBufferFromNormView",
     "XRCPUDepthInformation.prototype.rawValueToMeters",
     "XRCPUDepthInformation.prototype.width",
+    "XRCamera",
+    "XRCamera.prototype",
+    "XRCamera.prototype.height",
+    "XRCamera.prototype.width",
     "XRDOMOverlayState",
     "XRDOMOverlayState.prototype",
     "XRDOMOverlayState.prototype.type",
@@ -7118,6 +7118,7 @@
     "XRTransientInputHitTestSource.prototype.cancel",
     "XRView",
     "XRView.prototype",
+    "XRView.prototype.camera",
     "XRView.prototype.eye",
     "XRView.prototype.isFirstPersonObserver",
     "XRView.prototype.projectionMatrix",
@@ -7135,6 +7136,7 @@
     "XRViewport.prototype.y",
     "XRWebGLBinding",
     "XRWebGLBinding.prototype",
+    "XRWebGLBinding.prototype.getCameraImage",
     "XRWebGLBinding.prototype.getDepthInformation",
     "XRWebGLBinding.prototype.getReflectionCubeMap",
     "XRWebGLDepthInformation",
```

  
#### 107.0.5300.0 (`2022-9-15`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_107.0.5286.2_to_107.0.5300.0.diff), [json](./browser_apis/chrome-unstable_107.0.5286.2_to_107.0.5300.0.json), [full list](./browser_apis/chrome-unstable_107.0.5300.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_107.0.5286.2.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_107.0.5300.0.json	2022-11-09 12:36:17.129268408 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "107.0.0.0",
-  "browserApiCount": 7542,
+  "browserApiCount": 7546,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1129,6 +1129,8 @@
     "ElementInternals.prototype",
     "ElementInternals.prototype.ariaAtomic",
     "ElementInternals.prototype.ariaAutoComplete",
+    "ElementInternals.prototype.ariaBrailleLabel",
+    "ElementInternals.prototype.ariaBrailleRoleDescription",
     "ElementInternals.prototype.ariaBusy",
     "ElementInternals.prototype.ariaChecked",
     "ElementInternals.prototype.ariaColCount",
@@ -3291,6 +3293,8 @@
     "Option.prototype.constructor.prototype.append",
     "Option.prototype.constructor.prototype.ariaAtomic",
     "Option.prototype.constructor.prototype.ariaAutoComplete",
+    "Option.prototype.constructor.prototype.ariaBrailleLabel",
+    "Option.prototype.constructor.prototype.ariaBrailleRoleDescription",
     "Option.prototype.constructor.prototype.ariaBusy",
     "Option.prototype.constructor.prototype.ariaChecked",
     "Option.prototype.constructor.prototype.ariaColCount",
```

  
#### 107.0.5286.2 (`2022-9-8`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_106.0.5249.21_to_107.0.5286.2.diff), [json](./browser_apis/chrome-unstable_106.0.5249.21_to_107.0.5286.2.json), [full list](./browser_apis/chrome-unstable_107.0.5286.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_106.0.5249.21.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_107.0.5286.2.json	2022-11-09 12:36:17.125268359 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "106.0.0.0",
-  "browserApiCount": 7541,
+  "version": "107.0.0.0",
+  "browserApiCount": 7542,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3793,6 +3793,7 @@
     "PerformanceResourceTiming.prototype.nextHopProtocol",
     "PerformanceResourceTiming.prototype.redirectEnd",
     "PerformanceResourceTiming.prototype.redirectStart",
+    "PerformanceResourceTiming.prototype.renderBlockingStatus",
     "PerformanceResourceTiming.prototype.requestStart",
     "PerformanceResourceTiming.prototype.responseEnd",
     "PerformanceResourceTiming.prototype.responseStart",
```

  
#### 106.0.5249.21 (`2022-9-1`) 
No browser API changes.

  
#### 106.0.5249.12 (`2022-8-25`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_106.0.5245.0_to_106.0.5249.12.diff), [json](./browser_apis/chrome-unstable_106.0.5245.0_to_106.0.5249.12.json), [full list](./browser_apis/chrome-unstable_106.0.5249.12.json))
 ```diff
--- ./browser_apis/chrome-unstable_106.0.5245.0.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_106.0.5249.12.json	2022-11-09 12:36:17.125268359 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "106.0.0.0",
-  "browserApiCount": 7540,
+  "browserApiCount": 7541,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -5021,6 +5021,7 @@
     "SVGUseElement.prototype.y",
     "SVGViewElement",
     "SVGViewElement.prototype",
+    "SVGViewElement.prototype.attributeStyleMap",
     "SVGViewElement.prototype.autofocus",
     "SVGViewElement.prototype.blur",
     "SVGViewElement.prototype.className",
```

  
#### 106.0.5245.0 (`2022-8-18`) 
No browser API changes.

  
#### 106.0.5231.2 (`2022-8-12`) ⚡
Added 5 APIs, removed 9 (see: [diff](./browser_apis/chrome-unstable_106.0.5216.6_to_106.0.5231.2.diff), [json](./browser_apis/chrome-unstable_106.0.5216.6_to_106.0.5231.2.json), [full list](./browser_apis/chrome-unstable_106.0.5231.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_106.0.5216.6.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_106.0.5231.2.json	2022-11-09 12:36:17.125268359 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "106.0.0.0",
-  "browserApiCount": 7544,
+  "browserApiCount": 7540,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -234,6 +234,7 @@
     "AudioDecoder.prototype.decode",
     "AudioDecoder.prototype.decodeQueueSize",
     "AudioDecoder.prototype.flush",
+    "AudioDecoder.prototype.ondequeue",
     "AudioDecoder.prototype.reset",
     "AudioDecoder.prototype.state",
     "AudioDestinationNode",
@@ -247,6 +248,7 @@
     "AudioEncoder.prototype.encode",
     "AudioEncoder.prototype.encodeQueueSize",
     "AudioEncoder.prototype.flush",
+    "AudioEncoder.prototype.ondequeue",
     "AudioEncoder.prototype.reset",
     "AudioEncoder.prototype.state",
     "AudioListener",
@@ -5926,6 +5928,7 @@
     "VideoDecoder.prototype.decode",
     "VideoDecoder.prototype.decodeQueueSize",
     "VideoDecoder.prototype.flush",
+    "VideoDecoder.prototype.ondequeue",
     "VideoDecoder.prototype.reset",
     "VideoDecoder.prototype.state",
     "VideoEncoder",
@@ -5936,6 +5939,7 @@
     "VideoEncoder.prototype.encode",
     "VideoEncoder.prototype.encodeQueueSize",
     "VideoEncoder.prototype.flush",
+    "VideoEncoder.prototype.ondequeue",
     "VideoEncoder.prototype.reset",
     "VideoEncoder.prototype.state",
     "VideoFrame",
@@ -7169,15 +7173,6 @@
     "chrome.csi.prototype",
     "chrome.loadTimes",
     "chrome.loadTimes.prototype",
-    "chrome.runtime",
-    "chrome.runtime.OnInstalledReason",
-    "chrome.runtime.OnRestartRequiredReason",
-    "chrome.runtime.PlatformArch",
-    "chrome.runtime.PlatformNaclArch",
-    "chrome.runtime.PlatformOs",
-    "chrome.runtime.RequestUpdateCheckStatus",
-    "chrome.runtime.connect",
-    "chrome.runtime.sendMessage",
     "clearInterval",
     "clearTimeout",
     "clientInformation",
@@ -7190,6 +7185,7 @@
     "console.context",
     "console.count",
     "console.countReset",
+    "console.createTask",
     "console.debug",
     "console.dir",
     "console.dirxml",
```

  
#### 106.0.5216.6 (`2022-8-5`) ⚡
Added 3 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_105.0.5195.19_to_106.0.5216.6.diff), [json](./browser_apis/chrome-unstable_105.0.5195.19_to_106.0.5216.6.json), [full list](./browser_apis/chrome-unstable_106.0.5216.6.json))
 ```diff
--- ./browser_apis/chrome-unstable_105.0.5195.19.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_106.0.5216.6.json	2022-11-09 12:36:17.125268359 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
-  "version": "105.0.0.0",
-  "browserApiCount": 7541,
+  "version": "106.0.0.0",
+  "browserApiCount": 7544,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2500,6 +2500,8 @@
     "Intl.NumberFormat",
     "Intl.NumberFormat.prototype",
     "Intl.NumberFormat.prototype.format",
+    "Intl.NumberFormat.prototype.formatRange",
+    "Intl.NumberFormat.prototype.formatRangeToParts",
     "Intl.NumberFormat.prototype.formatToParts",
     "Intl.NumberFormat.prototype.resolvedOptions",
     "Intl.NumberFormat.supportedLocalesOf",
@@ -2507,6 +2509,7 @@
     "Intl.PluralRules.prototype",
     "Intl.PluralRules.prototype.resolvedOptions",
     "Intl.PluralRules.prototype.select",
+    "Intl.PluralRules.prototype.selectRange",
     "Intl.PluralRules.supportedLocalesOf",
     "Intl.RelativeTimeFormat",
     "Intl.RelativeTimeFormat.prototype",
```

  
#### 105.0.5195.19 (`2022-8-3`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_105.0.5195.10_to_105.0.5195.19.diff), [json](./browser_apis/chrome-unstable_105.0.5195.10_to_105.0.5195.19.json), [full list](./browser_apis/chrome-unstable_105.0.5195.19.json))
 ```diff
--- ./browser_apis/chrome-unstable_105.0.5195.10.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_105.0.5195.19.json	2022-11-09 12:36:17.125268359 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "105.0.0.0",
-  "browserApiCount": 7537,
+  "browserApiCount": 7541,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2821,6 +2821,7 @@
     "MediaSession.prototype.setMicrophoneActive",
     "MediaSession.prototype.setPositionState",
     "MediaSource",
+    "MediaSource.canConstructInDedicatedWorker",
     "MediaSource.isTypeSupported",
     "MediaSource.prototype",
     "MediaSource.prototype.activeSourceBuffers",
@@ -2828,6 +2829,7 @@
     "MediaSource.prototype.clearLiveSeekableRange",
     "MediaSource.prototype.duration",
     "MediaSource.prototype.endOfStream",
+    "MediaSource.prototype.handle",
     "MediaSource.prototype.onsourceclose",
     "MediaSource.prototype.onsourceended",
     "MediaSource.prototype.onsourceopen",
@@ -2835,6 +2837,8 @@
     "MediaSource.prototype.removeSourceBuffer",
     "MediaSource.prototype.setLiveSeekableRange",
     "MediaSource.prototype.sourceBuffers",
+    "MediaSourceHandle",
+    "MediaSourceHandle.prototype",
     "MediaStreamAudioDestinationNode",
     "MediaStreamAudioDestinationNode.prototype",
     "MediaStreamAudioDestinationNode.prototype.stream",
```

  
#### 105.0.5195.10 (`2022-7-28`) ⚡
Added 9 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_105.0.5191.2_to_105.0.5195.10.diff), [json](./browser_apis/chrome-unstable_105.0.5191.2_to_105.0.5195.10.json), [full list](./browser_apis/chrome-unstable_105.0.5195.10.json))
 ```diff
--- ./browser_apis/chrome-unstable_105.0.5191.2.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_105.0.5195.10.json	2022-11-09 12:36:17.125268359 +0000
@@ -1,7 +1,7 @@
 {
   "browser": "chrome-unstable",
   "version": "105.0.0.0",
-  "browserApiCount": 7528,
+  "browserApiCount": 7537,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2915,14 +2915,17 @@
     "NamedNodeMap.prototype.setNamedItemNS",
     "NavigateEvent",
     "NavigateEvent.prototype",
+    "NavigateEvent.prototype.canIntercept",
     "NavigateEvent.prototype.canTransition",
     "NavigateEvent.prototype.destination",
     "NavigateEvent.prototype.downloadRequest",
     "NavigateEvent.prototype.formData",
     "NavigateEvent.prototype.hashChange",
     "NavigateEvent.prototype.info",
+    "NavigateEvent.prototype.intercept",
     "NavigateEvent.prototype.navigationType",
     "NavigateEvent.prototype.restoreScroll",
+    "NavigateEvent.prototype.scroll",
     "NavigateEvent.prototype.signal",
     "NavigateEvent.prototype.transitionWhile",
     "NavigateEvent.prototype.userInitiated",
@@ -5649,6 +5652,12 @@
     "TransformStream.prototype",
     "TransformStream.prototype.readable",
     "TransformStream.prototype.writable",
+    "TransformStreamDefaultController",
+    "TransformStreamDefaultController.prototype",
+    "TransformStreamDefaultController.prototype.desiredSize",
+    "TransformStreamDefaultController.prototype.enqueue",
+    "TransformStreamDefaultController.prototype.error",
+    "TransformStreamDefaultController.prototype.terminate",
     "TransitionEvent",
     "TransitionEvent.prototype",
     "TransitionEvent.prototype.elapsedTime",
```

  
#### 105.0.5191.2 (`2022-7-22`) ⚡
Added 46 APIs, removed 12 (see: [diff](./browser_apis/chrome-unstable_105.0.5176.3_to_105.0.5191.2.diff), [json](./browser_apis/chrome-unstable_105.0.5176.3_to_105.0.5191.2.json), [full list](./browser_apis/chrome-unstable_105.0.5191.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_105.0.5176.3.json	2022-11-09 12:36:17.125268359 +0000
+++ ./browser_apis/chrome-unstable_105.0.5191.2.json	2022-11-09 12:36:17.125268359 +0000
@@ -1,20 +1,8 @@
 {
   "browser": "chrome-unstable",
   "version": "105.0.0.0",
-  "browserApiCount": 7494,
+  "browserApiCount": 7528,
   "browserApis": [
-    "AbortController",
-    "AbortController.prototype",
-    "AbortController.prototype.abort",
-    "AbortController.prototype.signal",
-    "AbortSignal",
-    "AbortSignal.abort",
-    "AbortSignal.prototype",
-    "AbortSignal.prototype.aborted",
-    "AbortSignal.prototype.onabort",
-    "AbortSignal.prototype.reason",
-    "AbortSignal.prototype.throwIfAborted",
-    "AbortSignal.timeout",
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
     "AbsoluteOrientationSensor.prototype.constructor",
@@ -432,6 +420,7 @@
     "CSS.ex",
     "CSS.fr",
     "CSS.grad",
+    "CSS.highlights",
     "CSS.in",
     "CSS.kHz",
     "CSS.mm",
@@ -2178,6 +2167,31 @@
     "Headers.prototype.keys",
     "Headers.prototype.set",
     "Headers.prototype.values",
+    "Highlight",
+    "Highlight.prototype",
+    "Highlight.prototype.add",
+    "Highlight.prototype.clear",
+    "Highlight.prototype.delete",
+    "Highlight.prototype.entries",
+    "Highlight.prototype.forEach",
+    "Highlight.prototype.has",
+    "Highlight.prototype.keys",
+    "Highlight.prototype.priority",
+    "Highlight.prototype.size",
+    "Highlight.prototype.type",
+    "Highlight.prototype.values",
+    "HighlightRegistry",
+    "HighlightRegistry.prototype",
+    "HighlightRegistry.prototype.clear",
+    "HighlightRegistry.prototype.delete",
+    "HighlightRegistry.prototype.entries",
+    "HighlightRegistry.prototype.forEach",
+    "HighlightRegistry.prototype.get",
+    "HighlightRegistry.prototype.has",
+    "HighlightRegistry.prototype.keys",
+    "HighlightRegistry.prototype.set",
+    "HighlightRegistry.prototype.size",
+    "HighlightRegistry.prototype.values",
     "History",
     "History.prototype",
     "History.prototype.back",
@@ -3411,6 +3425,7 @@
     "Option.prototype.constructor.prototype.onauxclick",
     "Option.prototype.constructor.prototype.onbeforecopy",
     "Option.prototype.constructor.prototype.onbeforecut",
+    "Option.prototype.constructor.prototype.onbeforeinput",
     "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
     "Option.prototype.constructor.prototype.onbeforexrselect",
@@ -3537,6 +3552,7 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
+    "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.slot",
@@ -4276,6 +4292,7 @@
     "Request.prototype",
     "Request.prototype.arrayBuffer",
     "Request.prototype.blob",
+    "Request.prototype.body",
     "Request.prototype.bodyUsed",
     "Request.prototype.cache",
     "Request.prototype.clone",
@@ -5004,6 +5021,7 @@
     "SVGViewElement.prototype.onanimationiteration",
     "SVGViewElement.prototype.onanimationstart",
     "SVGViewElement.prototype.onauxclick",
+    "SVGViewElement.prototype.onbeforeinput",
     "SVGViewElement.prototype.onbeforematch",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
@@ -5100,6 +5118,10 @@
     "SVGViewElement.prototype.viewBox",
     "SVGViewElement.prototype.viewportElement",
     "SVGViewElement.prototype.zoomAndPan",
+    "Sanitizer",
+    "Sanitizer.getDefaultConfiguration",
+    "Sanitizer.prototype",
+    "Sanitizer.prototype.getConfiguration",
     "Scheduler",
     "Scheduler.prototype",
     "Scheduler.prototype.postTask",
@@ -5492,14 +5514,24 @@
     "TaskAttributionTiming.prototype.toJSON",
     "TaskController",
     "TaskController.prototype",
+    "TaskController.prototype.abort",
+    "TaskController.prototype.constructor",
     "TaskController.prototype.setPriority",
+    "TaskController.prototype.signal",
     "TaskPriorityChangeEvent",
     "TaskPriorityChangeEvent.prototype",
     "TaskPriorityChangeEvent.prototype.previousPriority",
     "TaskSignal",
     "TaskSignal.prototype",
+    "TaskSignal.prototype.aborted",
+    "TaskSignal.prototype.constructor",
+    "TaskSignal.prototype.constructor.abort",
+    "TaskSignal.prototype.constructor.timeout",
+    "TaskSignal.prototype.onabort",
     "TaskSignal.prototype.onprioritychange",
     "TaskSignal.prototype.priority",
+    "TaskSignal.prototype.reason",
+    "TaskSignal.prototype.throwIfAborted",
     "Text",
     "Text.prototype",
     "Text.prototype.after",
@@ -6715,6 +6747,7 @@
     "XMLDocument.prototype.onauxclick",
     "XMLDocument.prototype.onbeforecopy",
     "XMLDocument.prototype.onbeforecut",
+    "XMLDocument.prototype.onbeforeinput",
     "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
     "XMLDocument.prototype.onbeforexrselect",
@@ -7212,6 +7245,7 @@
     "onanimationstart",
     "onappinstalled",
     "onauxclick",
+    "onbeforeinput",
     "onbeforeinstallprompt",
     "onbeforematch",
     "onbeforeprint",
```

  
#### 105.0.5176.3 (`2022-7-14`) ⚡
Added 2 APIs, removed 2 (see: [diff](./browser_apis/chrome-unstable_105.0.5148.2_to_105.0.5176.3.diff), [json](./browser_apis/chrome-unstable_105.0.5148.2_to_105.0.5176.3.json), [full list](./browser_apis/chrome-unstable_105.0.5176.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_105.0.5148.2.json	2022-11-09 12:36:17.121268310 +0000
+++ ./browser_apis/chrome-unstable_105.0.5176.3.json	2022-11-09 12:36:17.125268359 +0000
@@ -1639,8 +1639,6 @@
     "HTMLFormElement.prototype.method",
     "HTMLFormElement.prototype.name",
     "HTMLFormElement.prototype.noValidate",
-    "HTMLFormElement.prototype.rel",
-    "HTMLFormElement.prototype.relList",
     "HTMLFormElement.prototype.reportValidity",
     "HTMLFormElement.prototype.requestSubmit",
     "HTMLFormElement.prototype.reset",
@@ -3313,6 +3311,7 @@
     "Option.prototype.constructor.prototype.autofocus",
     "Option.prototype.constructor.prototype.before",
     "Option.prototype.constructor.prototype.blur",
+    "Option.prototype.constructor.prototype.checkVisibility",
     "Option.prototype.constructor.prototype.childElementCount",
     "Option.prototype.constructor.prototype.children",
     "Option.prototype.constructor.prototype.classList",
@@ -4314,6 +4313,7 @@
     "ResizeObserverSize.prototype.inlineSize",
     "Response",
     "Response.error",
+    "Response.json",
     "Response.prototype",
     "Response.prototype.arrayBuffer",
     "Response.prototype.blob",
```

  
#### 105.0.5148.2 (`2022-6-30`) 
No browser API changes.

  
#### 105.0.5137.4 (`2022-6-24`) ⚡
Added 23 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_104.0.5112.20_to_105.0.5137.4.diff), [json](./browser_apis/chrome-unstable_104.0.5112.20_to_105.0.5137.4.json), [full list](./browser_apis/chrome-unstable_105.0.5137.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_104.0.5112.20.json	2022-11-09 12:36:17.121268310 +0000
+++ ./browser_apis/chrome-unstable_105.0.5137.4.json	2022-11-09 12:36:17.121268310 +0000
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
--- ./browser_apis/chrome-unstable_104.0.5110.0.json	2022-11-09 12:36:17.121268310 +0000
+++ ./browser_apis/chrome-unstable_104.0.5112.12.json	2022-11-09 12:36:17.121268310 +0000
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
--- ./browser_apis/chrome-unstable_103.0.5060.24.json	2022-11-09 12:36:17.121268310 +0000
+++ ./browser_apis/chrome-unstable_104.0.5083.0.json	2022-11-09 12:36:17.121268310 +0000
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
--- ./browser_apis/chrome-unstable_103.0.5060.13.json	2022-11-09 12:36:17.121268310 +0000
+++ ./browser_apis/chrome-unstable_103.0.5060.24.json	2022-11-09 12:36:17.121268310 +0000
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

  <!-- browserapis:end -->
