# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 117.0.5938.62 (`2023-9-12`) ⚡
Added 27 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_116.0.5845.187_to_117.0.5938.62.diff), [json](./browser_apis/chrome-stable_116.0.5845.187_to_117.0.5938.62.json), [full list](./browser_apis/chrome-stable_117.0.5938.62.json))
 ```diff
--- ./browser_apis/chrome-stable_116.0.5845.187.json	2023-09-13 00:53:38.223013824 +0000
+++ ./browser_apis/chrome-stable_117.0.5938.62.json	2023-09-13 00:54:14.567333753 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8050,
+  "browserApiCount": 8077,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -619,6 +619,8 @@
     "CSSSkewY",
     "CSSSkewY.prototype",
     "CSSSkewY.prototype.ay",
+    "CSSStartingStyleRule",
+    "CSSStartingStyleRule.prototype",
     "CSSStyleDeclaration",
     "CSSStyleDeclaration.prototype",
     "CSSStyleDeclaration.prototype.cssFloat",
@@ -899,6 +901,7 @@
     "CustomElementRegistry.prototype",
     "CustomElementRegistry.prototype.define",
     "CustomElementRegistry.prototype.get",
+    "CustomElementRegistry.prototype.getName",
     "CustomElementRegistry.prototype.upgrade",
     "CustomElementRegistry.prototype.whenDefined",
     "CustomEvent",
@@ -2015,6 +2018,7 @@
     "HTMLIFrameElement.prototype.marginHeight",
     "HTMLIFrameElement.prototype.marginWidth",
     "HTMLIFrameElement.prototype.name",
+    "HTMLIFrameElement.prototype.privateToken",
     "HTMLIFrameElement.prototype.referrerPolicy",
     "HTMLIFrameElement.prototype.sandbox",
     "HTMLIFrameElement.prototype.scrolling",
@@ -2854,6 +2858,20 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
+    "Iterator",
+    "Iterator.from",
+    "Iterator.prototype",
+    "Iterator.prototype.drop",
+    "Iterator.prototype.every",
+    "Iterator.prototype.filter",
+    "Iterator.prototype.find",
+    "Iterator.prototype.flatMap",
+    "Iterator.prototype.forEach",
+    "Iterator.prototype.map",
+    "Iterator.prototype.reduce",
+    "Iterator.prototype.some",
+    "Iterator.prototype.take",
+    "Iterator.prototype.toArray",
     "JSON",
     "JSON.isRawJSON",
     "JSON.parse",
@@ -2988,6 +3006,7 @@
     "MIDIOutputMap.prototype.size",
     "MIDIOutputMap.prototype.values",
     "Map",
+    "Map.groupBy",
     "Map.prototype",
     "Map.prototype.clear",
     "Map.prototype.delete",
@@ -3582,6 +3601,7 @@
     "Object.getOwnPropertyNames",
     "Object.getOwnPropertySymbols",
     "Object.getPrototypeOf",
+    "Object.groupBy",
     "Object.hasOwn",
     "Object.is",
     "Object.isExtensible",
@@ -4232,6 +4252,7 @@
     "PerformanceResourceTiming.prototype.connectEnd",
     "PerformanceResourceTiming.prototype.connectStart",
     "PerformanceResourceTiming.prototype.decodedBodySize",
+    "PerformanceResourceTiming.prototype.deliveryType",
     "PerformanceResourceTiming.prototype.domainLookupEnd",
     "PerformanceResourceTiming.prototype.domainLookupStart",
     "PerformanceResourceTiming.prototype.encodedBodySize",
@@ -4578,10 +4599,13 @@
     "RTCRtpTransceiver.prototype",
     "RTCRtpTransceiver.prototype.currentDirection",
     "RTCRtpTransceiver.prototype.direction",
+    "RTCRtpTransceiver.prototype.getHeaderExtensionsToNegotiate",
+    "RTCRtpTransceiver.prototype.getNegotiatedHeaderExtensions",
     "RTCRtpTransceiver.prototype.mid",
     "RTCRtpTransceiver.prototype.receiver",
     "RTCRtpTransceiver.prototype.sender",
     "RTCRtpTransceiver.prototype.setCodecPreferences",
+    "RTCRtpTransceiver.prototype.setHeaderExtensionsToNegotiate",
     "RTCRtpTransceiver.prototype.stop",
     "RTCRtpTransceiver.prototype.stopped",
     "RTCSctpTransport",
@@ -7244,6 +7268,8 @@
     "XMLDocument.prototype.getElementsByTagNameNS",
     "XMLDocument.prototype.getSelection",
     "XMLDocument.prototype.hasFocus",
+    "XMLDocument.prototype.hasPrivateToken",
+    "XMLDocument.prototype.hasRedemptionRecord",
     "XMLDocument.prototype.head",
     "XMLDocument.prototype.hidden",
     "XMLDocument.prototype.images",
@@ -7423,6 +7449,7 @@
     "XMLHttpRequest.prototype.responseURL",
     "XMLHttpRequest.prototype.responseXML",
     "XMLHttpRequest.prototype.send",
+    "XMLHttpRequest.prototype.setPrivateToken",
     "XMLHttpRequest.prototype.setRequestHeader",
     "XMLHttpRequest.prototype.status",
     "XMLHttpRequest.prototype.statusText",
```

  
#### 116.0.5845.187 (`2023-9-11`) 
No browser API changes.

  
#### 116.0.5845.179 (`2023-9-5`) 
No browser API changes.

  
#### 116.0.5845.140 (`2023-8-29`) 
No browser API changes.

  
#### 116.0.5845.110 (`2023-8-22`) 
No browser API changes.

  
#### 116.0.5845.96 (`2023-8-15`) ⚡
Added 15 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_115.0.5790.170_to_116.0.5845.96.diff), [json](./browser_apis/chrome-stable_115.0.5790.170_to_116.0.5845.96.json), [full list](./browser_apis/chrome-stable_116.0.5845.96.json))
 ```diff
--- ./browser_apis/chrome-stable_115.0.5790.170.json	2023-08-16 00:50:57.439871339 +0000
+++ ./browser_apis/chrome-stable_116.0.5845.96.json	2023-08-16 00:51:38.352293750 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8035,
+  "browserApiCount": 8050,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1131,6 +1131,14 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
+    "DocumentPictureInPicture",
+    "DocumentPictureInPicture.prototype",
+    "DocumentPictureInPicture.prototype.onenter",
+    "DocumentPictureInPicture.prototype.requestWindow",
+    "DocumentPictureInPicture.prototype.window",
+    "DocumentPictureInPictureEvent",
+    "DocumentPictureInPictureEvent.prototype",
+    "DocumentPictureInPictureEvent.prototype.window",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -2626,6 +2634,9 @@
     "IdentityCredential",
     "IdentityCredential.prototype",
     "IdentityCredential.prototype.token",
+    "IdentityProvider",
+    "IdentityProvider.getUserInfo",
+    "IdentityProvider.prototype",
     "IdleDeadline",
     "IdleDeadline.prototype",
     "IdleDeadline.prototype.didTimeout",
@@ -4191,6 +4202,7 @@
     "PerformanceNavigationTiming",
     "PerformanceNavigationTiming.prototype",
     "PerformanceNavigationTiming.prototype.activationStart",
+    "PerformanceNavigationTiming.prototype.criticalCHRestart",
     "PerformanceNavigationTiming.prototype.domComplete",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventEnd",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventStart",
@@ -5984,10 +5996,12 @@
     "TaskPriorityChangeEvent.prototype",
     "TaskPriorityChangeEvent.prototype.previousPriority",
     "TaskSignal",
+    "TaskSignal.any",
     "TaskSignal.prototype",
     "TaskSignal.prototype.aborted",
     "TaskSignal.prototype.constructor",
     "TaskSignal.prototype.constructor.abort",
+    "TaskSignal.prototype.constructor.any",
     "TaskSignal.prototype.constructor.timeout",
     "TaskSignal.prototype.onabort",
     "TaskSignal.prototype.onprioritychange",
@@ -7708,6 +7722,7 @@
     "decodeURIComponent",
     "devicePixelRatio",
     "document",
+    "documentPictureInPicture",
     "encodeURI",
     "encodeURIComponent",
     "escape",
```

  
#### 115.0.5790.170 (`2023-8-2`) 
No browser API changes.

  
#### 115.0.5790.110 (`2023-7-25`) 
No browser API changes.

  
#### 115.0.5790.102 (`2023-7-21`) 
No browser API changes.

  
#### 115.0.5790.98 (`2023-7-18`) ⚡
Added 25 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_114.0.5735.198_to_115.0.5790.98.diff), [json](./browser_apis/chrome-stable_114.0.5735.198_to_115.0.5790.98.json), [full list](./browser_apis/chrome-stable_115.0.5790.98.json))
 ```diff
--- ./browser_apis/chrome-stable_114.0.5735.198.json	2023-07-19 02:22:09.235439352 +0000
+++ ./browser_apis/chrome-stable_115.0.5790.98.json	2023-07-19 02:22:41.076008353 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8010,
+  "browserApiCount": 8035,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -52,6 +52,8 @@
     "Animation.prototype.play",
     "Animation.prototype.playState",
     "Animation.prototype.playbackRate",
+    "Animation.prototype.rangeEnd",
+    "Animation.prototype.rangeStart",
     "Animation.prototype.ready",
     "Animation.prototype.replaceState",
     "Animation.prototype.reverse",
@@ -70,6 +72,7 @@
     "AnimationTimeline",
     "AnimationTimeline.prototype",
     "AnimationTimeline.prototype.currentTime",
+    "AnimationTimeline.prototype.duration",
     "Array",
     "Array.from",
     "Array.isArray",
@@ -1387,6 +1390,7 @@
     "GPU.prototype",
     "GPU.prototype.getPreferredCanvasFormat",
     "GPU.prototype.requestAdapter",
+    "GPU.prototype.wgslLanguageFeatures",
     "GPUAdapter",
     "GPUAdapter.prototype",
     "GPUAdapter.prototype.features",
@@ -4220,6 +4224,7 @@
     "PerformanceResourceTiming.prototype.domainLookupStart",
     "PerformanceResourceTiming.prototype.encodedBodySize",
     "PerformanceResourceTiming.prototype.fetchStart",
+    "PerformanceResourceTiming.prototype.firstInterimResponseStart",
     "PerformanceResourceTiming.prototype.initiatorType",
     "PerformanceResourceTiming.prototype.nextHopProtocol",
     "PerformanceResourceTiming.prototype.redirectEnd",
@@ -5617,6 +5622,10 @@
     "ScriptProcessorNode.prototype",
     "ScriptProcessorNode.prototype.bufferSize",
     "ScriptProcessorNode.prototype.onaudioprocess",
+    "ScrollTimeline",
+    "ScrollTimeline.prototype",
+    "ScrollTimeline.prototype.axis",
+    "ScrollTimeline.prototype.source",
     "SecurityPolicyViolationEvent",
     "SecurityPolicyViolationEvent.prototype",
     "SecurityPolicyViolationEvent.prototype.blockedURI",
@@ -6413,6 +6422,11 @@
     "VideoPlaybackQuality.prototype.creationTime",
     "VideoPlaybackQuality.prototype.droppedVideoFrames",
     "VideoPlaybackQuality.prototype.totalVideoFrames",
+    "ViewTimeline",
+    "ViewTimeline.prototype",
+    "ViewTimeline.prototype.endOffset",
+    "ViewTimeline.prototype.startOffset",
+    "ViewTimeline.prototype.subject",
     "ViewTransition",
     "ViewTransition.prototype",
     "ViewTransition.prototype.finished",
@@ -6428,6 +6442,8 @@
     "VirtualKeyboard.prototype.show",
     "VirtualKeyboardGeometryChangeEvent",
     "VirtualKeyboardGeometryChangeEvent.prototype",
+    "VisibilityStateEntry",
+    "VisibilityStateEntry.prototype",
     "VisualViewport",
     "VisualViewport.prototype",
     "VisualViewport.prototype.height",
@@ -6439,6 +6455,14 @@
     "VisualViewport.prototype.pageTop",
     "VisualViewport.prototype.scale",
     "VisualViewport.prototype.width",
+    "WGSLLanguageFeatures",
+    "WGSLLanguageFeatures.prototype",
+    "WGSLLanguageFeatures.prototype.entries",
+    "WGSLLanguageFeatures.prototype.forEach",
+    "WGSLLanguageFeatures.prototype.has",
+    "WGSLLanguageFeatures.prototype.keys",
+    "WGSLLanguageFeatures.prototype.size",
+    "WGSLLanguageFeatures.prototype.values",
     "WakeLock",
     "WakeLock.prototype",
     "WakeLock.prototype.request",
@@ -6489,6 +6513,7 @@
     "WebAssembly.Instance",
     "WebAssembly.Instance.prototype",
     "WebAssembly.Instance.prototype.exports",
+    "WebAssembly.JSTag",
     "WebAssembly.LinkError",
     "WebAssembly.LinkError.prototype",
     "WebAssembly.Memory",
```

  
#### 114.0.5735.198 (`2023-6-26`) 
No browser API changes.

  
#### 114.0.5735.133 (`2023-6-13`) 
No browser API changes.

  
#### 114.0.5735.106 (`2023-6-5`) 
No browser API changes.

  
#### 114.0.5735.90 (`2023-5-30`) ⚡
Added 27 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_113.0.5672.126_to_114.0.5735.90.diff), [json](./browser_apis/chrome-stable_113.0.5672.126_to_114.0.5735.90.json), [full list](./browser_apis/chrome-stable_114.0.5735.90.json))
 ```diff
--- ./browser_apis/chrome-stable_113.0.5672.126.json	2023-05-31 01:11:14.517367603 +0000
+++ ./browser_apis/chrome-stable_114.0.5735.90.json	2023-05-31 01:11:55.177180520 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7983,
+  "browserApiCount": 8010,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -117,10 +117,13 @@
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
     "ArrayBuffer.prototype.byteLength",
+    "ArrayBuffer.prototype.detached",
     "ArrayBuffer.prototype.maxByteLength",
     "ArrayBuffer.prototype.resizable",
     "ArrayBuffer.prototype.resize",
     "ArrayBuffer.prototype.slice",
+    "ArrayBuffer.prototype.transfer",
+    "ArrayBuffer.prototype.transferToFixedLength",
     "Atomics",
     "Atomics.add",
     "Atomics.and",
@@ -1833,6 +1836,8 @@
     "HTMLButtonElement.prototype.formTarget",
     "HTMLButtonElement.prototype.labels",
     "HTMLButtonElement.prototype.name",
+    "HTMLButtonElement.prototype.popoverTargetAction",
+    "HTMLButtonElement.prototype.popoverTargetElement",
     "HTMLButtonElement.prototype.reportValidity",
     "HTMLButtonElement.prototype.setCustomValidity",
     "HTMLButtonElement.prototype.type",
@@ -2036,6 +2041,8 @@
     "HTMLInputElement.prototype.name",
     "HTMLInputElement.prototype.pattern",
     "HTMLInputElement.prototype.placeholder",
+    "HTMLInputElement.prototype.popoverTargetAction",
+    "HTMLInputElement.prototype.popoverTargetElement",
     "HTMLInputElement.prototype.readOnly",
     "HTMLInputElement.prototype.reportValidity",
     "HTMLInputElement.prototype.required",
@@ -2833,7 +2840,9 @@
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
     "JSON",
+    "JSON.isRawJSON",
     "JSON.parse",
+    "JSON.rawJSON",
     "JSON.stringify",
     "Keyboard",
     "Keyboard.prototype",
@@ -3026,6 +3035,7 @@
     "MathMLElement.prototype.onauxclick",
     "MathMLElement.prototype.onbeforeinput",
     "MathMLElement.prototype.onbeforematch",
+    "MathMLElement.prototype.onbeforetoggle",
     "MathMLElement.prototype.onbeforexrselect",
     "MathMLElement.prototype.onblur",
     "MathMLElement.prototype.oncancel",
@@ -3092,6 +3102,7 @@
     "MathMLElement.prototype.onreset",
     "MathMLElement.prototype.onresize",
     "MathMLElement.prototype.onscroll",
+    "MathMLElement.prototype.onscrollend",
     "MathMLElement.prototype.onsecuritypolicyviolation",
     "MathMLElement.prototype.onseeked",
     "MathMLElement.prototype.onseeking",
@@ -3832,6 +3843,7 @@
     "Option.prototype.constructor.prototype.hasAttributes",
     "Option.prototype.constructor.prototype.hasPointerCapture",
     "Option.prototype.constructor.prototype.hidden",
+    "Option.prototype.constructor.prototype.hidePopover",
     "Option.prototype.constructor.prototype.id",
     "Option.prototype.constructor.prototype.inert",
     "Option.prototype.constructor.prototype.innerHTML",
@@ -3863,6 +3875,7 @@
     "Option.prototype.constructor.prototype.onbeforeinput",
     "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
+    "Option.prototype.constructor.prototype.onbeforetoggle",
     "Option.prototype.constructor.prototype.onbeforexrselect",
     "Option.prototype.constructor.prototype.onblur",
     "Option.prototype.constructor.prototype.oncancel",
@@ -3931,6 +3944,7 @@
     "Option.prototype.constructor.prototype.onreset",
     "Option.prototype.constructor.prototype.onresize",
     "Option.prototype.constructor.prototype.onscroll",
+    "Option.prototype.constructor.prototype.onscrollend",
     "Option.prototype.constructor.prototype.onsearch",
     "Option.prototype.constructor.prototype.onsecuritypolicyviolation",
     "Option.prototype.constructor.prototype.onseeked",
@@ -3960,6 +3974,7 @@
     "Option.prototype.constructor.prototype.outerHTML",
     "Option.prototype.constructor.prototype.outerText",
     "Option.prototype.constructor.prototype.part",
+    "Option.prototype.constructor.prototype.popover",
     "Option.prototype.constructor.prototype.prefix",
     "Option.prototype.constructor.prototype.prepend",
     "Option.prototype.constructor.prototype.previousElementSibling",
@@ -3991,6 +4006,7 @@
     "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
+    "Option.prototype.constructor.prototype.showPopover",
     "Option.prototype.constructor.prototype.slot",
     "Option.prototype.constructor.prototype.spellcheck",
     "Option.prototype.constructor.prototype.style",
@@ -3998,6 +4014,7 @@
     "Option.prototype.constructor.prototype.tagName",
     "Option.prototype.constructor.prototype.title",
     "Option.prototype.constructor.prototype.toggleAttribute",
+    "Option.prototype.constructor.prototype.togglePopover",
     "Option.prototype.constructor.prototype.translate",
     "Option.prototype.constructor.prototype.virtualKeyboardPolicy",
     "Option.prototype.constructor.prototype.webkitMatchesSelector",
@@ -5454,6 +5471,7 @@
     "SVGViewElement.prototype.onauxclick",
     "SVGViewElement.prototype.onbeforeinput",
     "SVGViewElement.prototype.onbeforematch",
+    "SVGViewElement.prototype.onbeforetoggle",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
     "SVGViewElement.prototype.oncancel",
@@ -5520,6 +5538,7 @@
     "SVGViewElement.prototype.onreset",
     "SVGViewElement.prototype.onresize",
     "SVGViewElement.prototype.onscroll",
+    "SVGViewElement.prototype.onscrollend",
     "SVGViewElement.prototype.onsecuritypolicyviolation",
     "SVGViewElement.prototype.onseeked",
     "SVGViewElement.prototype.onseeking",
@@ -6049,6 +6068,10 @@
     "TimeRanges.prototype.end",
     "TimeRanges.prototype.length",
     "TimeRanges.prototype.start",
+    "ToggleEvent",
+    "ToggleEvent.prototype",
+    "ToggleEvent.prototype.newState",
+    "ToggleEvent.prototype.oldState",
     "Touch",
     "Touch.prototype",
     "Touch.prototype.clientX",
@@ -7202,6 +7225,7 @@
     "XMLDocument.prototype.onbeforeinput",
     "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
+    "XMLDocument.prototype.onbeforetoggle",
     "XMLDocument.prototype.onbeforexrselect",
     "XMLDocument.prototype.onblur",
     "XMLDocument.prototype.oncancel",
@@ -7276,6 +7300,7 @@
     "XMLDocument.prototype.onresize",
     "XMLDocument.prototype.onresume",
     "XMLDocument.prototype.onscroll",
+    "XMLDocument.prototype.onscrollend",
     "XMLDocument.prototype.onsearch",
     "XMLDocument.prototype.onsecuritypolicyviolation",
     "XMLDocument.prototype.onseeked",
@@ -7703,6 +7728,7 @@
     "onbeforeinstallprompt",
     "onbeforematch",
     "onbeforeprint",
+    "onbeforetoggle",
     "onbeforeunload",
     "onbeforexrselect",
     "onblur",
@@ -7780,6 +7806,7 @@
     "onreset",
     "onresize",
     "onscroll",
+    "onscrollend",
     "onsearch",
     "onsecuritypolicyviolation",
     "onseeked",
```

  
#### 113.0.5672.126 (`2023-5-16`) 
No browser API changes.

  
#### 113.0.5672.92 (`2023-5-8`) 
No browser API changes.

  
#### 113.0.5672.63 (`2023-5-2`) ⚡
Added 267 APIs, removed 4 (see: [diff](./browser_apis/chrome-stable_112.0.5615.165_to_113.0.5672.63.diff), [json](./browser_apis/chrome-stable_112.0.5615.165_to_113.0.5672.63.json), [full list](./browser_apis/chrome-stable_113.0.5672.63.json))
 ```diff
--- ./browser_apis/chrome-stable_112.0.5615.165.json	2023-05-03 01:02:04.228036703 +0000
+++ ./browser_apis/chrome-stable_113.0.5672.63.json	2023-05-03 01:02:54.528775415 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7720,
+  "browserApiCount": 7983,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -720,8 +720,6 @@
     "CanvasCaptureMediaStreamTrack.prototype",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
-    "CanvasFilter",
-    "CanvasFilter.prototype",
     "CanvasGradient",
     "CanvasGradient.prototype",
     "CanvasGradient.prototype.addColorStop",
@@ -1382,6 +1380,270 @@
     "FormDataEvent.prototype.formData",
     "FragmentDirective",
     "FragmentDirective.prototype",
+    "GPU",
+    "GPU.prototype",
+    "GPU.prototype.getPreferredCanvasFormat",
+    "GPU.prototype.requestAdapter",
+    "GPUAdapter",
+    "GPUAdapter.prototype",
+    "GPUAdapter.prototype.features",
+    "GPUAdapter.prototype.isFallbackAdapter",
+    "GPUAdapter.prototype.limits",
+    "GPUAdapter.prototype.requestAdapterInfo",
+    "GPUAdapter.prototype.requestDevice",
+    "GPUAdapterInfo",
+    "GPUAdapterInfo.prototype",
+    "GPUAdapterInfo.prototype.architecture",
+    "GPUAdapterInfo.prototype.description",
+    "GPUAdapterInfo.prototype.device",
+    "GPUAdapterInfo.prototype.vendor",
+    "GPUBindGroup",
+    "GPUBindGroup.prototype",
+    "GPUBindGroup.prototype.label",
+    "GPUBindGroupLayout",
+    "GPUBindGroupLayout.prototype",
+    "GPUBindGroupLayout.prototype.label",
+    "GPUBuffer",
+    "GPUBuffer.prototype",
+    "GPUBuffer.prototype.destroy",
+    "GPUBuffer.prototype.getMappedRange",
+    "GPUBuffer.prototype.label",
+    "GPUBuffer.prototype.mapAsync",
+    "GPUBuffer.prototype.mapState",
+    "GPUBuffer.prototype.size",
+    "GPUBuffer.prototype.unmap",
+    "GPUBuffer.prototype.usage",
+    "GPUBufferUsage",
+    "GPUCanvasContext",
+    "GPUCanvasContext.prototype",
+    "GPUCanvasContext.prototype.canvas",
+    "GPUCanvasContext.prototype.configure",
+    "GPUCanvasContext.prototype.getCurrentTexture",
+    "GPUCanvasContext.prototype.unconfigure",
+    "GPUColorWrite",
+    "GPUCommandBuffer",
+    "GPUCommandBuffer.prototype",
+    "GPUCommandBuffer.prototype.label",
+    "GPUCommandEncoder",
+    "GPUCommandEncoder.prototype",
+    "GPUCommandEncoder.prototype.beginComputePass",
+    "GPUCommandEncoder.prototype.beginRenderPass",
+    "GPUCommandEncoder.prototype.clearBuffer",
+    "GPUCommandEncoder.prototype.copyBufferToBuffer",
+    "GPUCommandEncoder.prototype.copyBufferToTexture",
+    "GPUCommandEncoder.prototype.copyTextureToBuffer",
+    "GPUCommandEncoder.prototype.copyTextureToTexture",
+    "GPUCommandEncoder.prototype.finish",
+    "GPUCommandEncoder.prototype.insertDebugMarker",
+    "GPUCommandEncoder.prototype.label",
+    "GPUCommandEncoder.prototype.popDebugGroup",
+    "GPUCommandEncoder.prototype.pushDebugGroup",
+    "GPUCommandEncoder.prototype.resolveQuerySet",
+    "GPUCommandEncoder.prototype.writeTimestamp",
+    "GPUCompilationInfo",
+    "GPUCompilationInfo.prototype",
+    "GPUCompilationInfo.prototype.messages",
+    "GPUCompilationMessage",
+    "GPUCompilationMessage.prototype",
+    "GPUCompilationMessage.prototype.length",
+    "GPUCompilationMessage.prototype.lineNum",
+    "GPUCompilationMessage.prototype.linePos",
+    "GPUCompilationMessage.prototype.message",
+    "GPUCompilationMessage.prototype.offset",
+    "GPUCompilationMessage.prototype.type",
+    "GPUComputePassEncoder",
+    "GPUComputePassEncoder.prototype",
+    "GPUComputePassEncoder.prototype.dispatchWorkgroups",
+    "GPUComputePassEncoder.prototype.dispatchWorkgroupsIndirect",
+    "GPUComputePassEncoder.prototype.end",
+    "GPUComputePassEncoder.prototype.insertDebugMarker",
+    "GPUComputePassEncoder.prototype.label",
+    "GPUComputePassEncoder.prototype.popDebugGroup",
+    "GPUComputePassEncoder.prototype.pushDebugGroup",
+    "GPUComputePassEncoder.prototype.setBindGroup",
+    "GPUComputePassEncoder.prototype.setPipeline",
+    "GPUComputePassEncoder.prototype.writeTimestamp",
+    "GPUComputePipeline",
+    "GPUComputePipeline.prototype",
+    "GPUComputePipeline.prototype.getBindGroupLayout",
+    "GPUComputePipeline.prototype.label",
+    "GPUDevice",
+    "GPUDevice.prototype",
+    "GPUDevice.prototype.createBindGroup",
+    "GPUDevice.prototype.createBindGroupLayout",
+    "GPUDevice.prototype.createBuffer",
+    "GPUDevice.prototype.createCommandEncoder",
+    "GPUDevice.prototype.createComputePipeline",
+    "GPUDevice.prototype.createComputePipelineAsync",
+    "GPUDevice.prototype.createPipelineLayout",
+    "GPUDevice.prototype.createQuerySet",
+    "GPUDevice.prototype.createRenderBundleEncoder",
+    "GPUDevice.prototype.createRenderPipeline",
+    "GPUDevice.prototype.createRenderPipelineAsync",
+    "GPUDevice.prototype.createSampler",
+    "GPUDevice.prototype.createShaderModule",
+    "GPUDevice.prototype.createTexture",
+    "GPUDevice.prototype.destroy",
+    "GPUDevice.prototype.features",
+    "GPUDevice.prototype.importExternalTexture",
+    "GPUDevice.prototype.label",
+    "GPUDevice.prototype.limits",
+    "GPUDevice.prototype.lost",
+    "GPUDevice.prototype.onuncapturederror",
+    "GPUDevice.prototype.popErrorScope",
+    "GPUDevice.prototype.pushErrorScope",
+    "GPUDevice.prototype.queue",
+    "GPUDeviceLostInfo",
+    "GPUDeviceLostInfo.prototype",
+    "GPUDeviceLostInfo.prototype.message",
+    "GPUDeviceLostInfo.prototype.reason",
+    "GPUError",
+    "GPUError.prototype",
+    "GPUError.prototype.message",
+    "GPUExternalTexture",
+    "GPUExternalTexture.prototype",
+    "GPUExternalTexture.prototype.label",
+    "GPUInternalError",
+    "GPUInternalError.prototype",
+    "GPUMapMode",
+    "GPUOutOfMemoryError",
+    "GPUOutOfMemoryError.prototype",
+    "GPUPipelineError",
+    "GPUPipelineError.prototype",
+    "GPUPipelineError.prototype.reason",
+    "GPUPipelineLayout",
+    "GPUPipelineLayout.prototype",
+    "GPUPipelineLayout.prototype.label",
+    "GPUQuerySet",
+    "GPUQuerySet.prototype",
+    "GPUQuerySet.prototype.count",
+    "GPUQuerySet.prototype.destroy",
+    "GPUQuerySet.prototype.label",
+    "GPUQuerySet.prototype.type",
+    "GPUQueue",
+    "GPUQueue.prototype",
+    "GPUQueue.prototype.copyExternalImageToTexture",
+    "GPUQueue.prototype.label",
+    "GPUQueue.prototype.onSubmittedWorkDone",
+    "GPUQueue.prototype.submit",
+    "GPUQueue.prototype.writeBuffer",
+    "GPUQueue.prototype.writeTexture",
+    "GPURenderBundle",
+    "GPURenderBundle.prototype",
+    "GPURenderBundle.prototype.label",
+    "GPURenderBundleEncoder",
+    "GPURenderBundleEncoder.prototype",
+    "GPURenderBundleEncoder.prototype.draw",
+    "GPURenderBundleEncoder.prototype.drawIndexed",
+    "GPURenderBundleEncoder.prototype.drawIndexedIndirect",
+    "GPURenderBundleEncoder.prototype.drawIndirect",
+    "GPURenderBundleEncoder.prototype.finish",
+    "GPURenderBundleEncoder.prototype.insertDebugMarker",
+    "GPURenderBundleEncoder.prototype.label",
+    "GPURenderBundleEncoder.prototype.popDebugGroup",
+    "GPURenderBundleEncoder.prototype.pushDebugGroup",
+    "GPURenderBundleEncoder.prototype.setBindGroup",
+    "GPURenderBundleEncoder.prototype.setIndexBuffer",
+    "GPURenderBundleEncoder.prototype.setPipeline",
+    "GPURenderBundleEncoder.prototype.setVertexBuffer",
+    "GPURenderPassEncoder",
+    "GPURenderPassEncoder.prototype",
+    "GPURenderPassEncoder.prototype.beginOcclusionQuery",
+    "GPURenderPassEncoder.prototype.draw",
+    "GPURenderPassEncoder.prototype.drawIndexed",
+    "GPURenderPassEncoder.prototype.drawIndexedIndirect",
+    "GPURenderPassEncoder.prototype.drawIndirect",
+    "GPURenderPassEncoder.prototype.end",
+    "GPURenderPassEncoder.prototype.endOcclusionQuery",
+    "GPURenderPassEncoder.prototype.executeBundles",
+    "GPURenderPassEncoder.prototype.insertDebugMarker",
+    "GPURenderPassEncoder.prototype.label",
+    "GPURenderPassEncoder.prototype.popDebugGroup",
+    "GPURenderPassEncoder.prototype.pushDebugGroup",
+    "GPURenderPassEncoder.prototype.setBindGroup",
+    "GPURenderPassEncoder.prototype.setBlendConstant",
+    "GPURenderPassEncoder.prototype.setIndexBuffer",
+    "GPURenderPassEncoder.prototype.setPipeline",
+    "GPURenderPassEncoder.prototype.setScissorRect",
+    "GPURenderPassEncoder.prototype.setStencilReference",
+    "GPURenderPassEncoder.prototype.setVertexBuffer",
+    "GPURenderPassEncoder.prototype.setViewport",
+    "GPURenderPassEncoder.prototype.writeTimestamp",
+    "GPURenderPipeline",
+    "GPURenderPipeline.prototype",
+    "GPURenderPipeline.prototype.getBindGroupLayout",
+    "GPURenderPipeline.prototype.label",
+    "GPUSampler",
+    "GPUSampler.prototype",
+    "GPUSampler.prototype.label",
+    "GPUShaderModule",
+    "GPUShaderModule.prototype",
+    "GPUShaderModule.prototype.getCompilationInfo",
+    "GPUShaderModule.prototype.label",
+    "GPUShaderStage",
+    "GPUSupportedFeatures",
+    "GPUSupportedFeatures.prototype",
+    "GPUSupportedFeatures.prototype.entries",
+    "GPUSupportedFeatures.prototype.forEach",
+    "GPUSupportedFeatures.prototype.has",
+    "GPUSupportedFeatures.prototype.keys",
+    "GPUSupportedFeatures.prototype.size",
+    "GPUSupportedFeatures.prototype.values",
+    "GPUSupportedLimits",
+    "GPUSupportedLimits.prototype",
+    "GPUSupportedLimits.prototype.maxBindGroups",
+    "GPUSupportedLimits.prototype.maxBindingsPerBindGroup",
+    "GPUSupportedLimits.prototype.maxBufferSize",
+    "GPUSupportedLimits.prototype.maxColorAttachmentBytesPerSample",
+    "GPUSupportedLimits.prototype.maxColorAttachments",
+    "GPUSupportedLimits.prototype.maxComputeInvocationsPerWorkgroup",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeX",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeY",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeZ",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupStorageSize",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupsPerDimension",
+    "GPUSupportedLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout",
+    "GPUSupportedLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout",
+    "GPUSupportedLimits.prototype.maxInterStageShaderComponents",
+    "GPUSupportedLimits.prototype.maxInterStageShaderVariables",
+    "GPUSupportedLimits.prototype.maxSampledTexturesPerShaderStage",
+    "GPUSupportedLimits.prototype.maxSamplersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxStorageBufferBindingSize",
+    "GPUSupportedLimits.prototype.maxStorageBuffersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxStorageTexturesPerShaderStage",
+    "GPUSupportedLimits.prototype.maxTextureArrayLayers",
+    "GPUSupportedLimits.prototype.maxTextureDimension1D",
+    "GPUSupportedLimits.prototype.maxTextureDimension2D",
+    "GPUSupportedLimits.prototype.maxTextureDimension3D",
+    "GPUSupportedLimits.prototype.maxUniformBufferBindingSize",
+    "GPUSupportedLimits.prototype.maxUniformBuffersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxVertexAttributes",
+    "GPUSupportedLimits.prototype.maxVertexBufferArrayStride",
+    "GPUSupportedLimits.prototype.maxVertexBuffers",
+    "GPUSupportedLimits.prototype.minStorageBufferOffsetAlignment",
+    "GPUSupportedLimits.prototype.minUniformBufferOffsetAlignment",
+    "GPUTexture",
+    "GPUTexture.prototype",
+    "GPUTexture.prototype.createView",
+    "GPUTexture.prototype.depthOrArrayLayers",
+    "GPUTexture.prototype.destroy",
+    "GPUTexture.prototype.dimension",
+    "GPUTexture.prototype.format",
+    "GPUTexture.prototype.height",
+    "GPUTexture.prototype.label",
+    "GPUTexture.prototype.mipLevelCount",
+    "GPUTexture.prototype.sampleCount",
+    "GPUTexture.prototype.usage",
+    "GPUTexture.prototype.width",
+    "GPUTextureUsage",
+    "GPUTextureView",
+    "GPUTextureView.prototype",
+    "GPUTextureView.prototype.label",
+    "GPUUncapturedErrorEvent",
+    "GPUUncapturedErrorEvent.prototype",
+    "GPUUncapturedErrorEvent.prototype.error",
+    "GPUValidationError",
+    "GPUValidationError.prototype",
     "GainNode",
     "GainNode.prototype",
     "GainNode.prototype.gain",
@@ -2196,6 +2458,7 @@
     "Headers.prototype.entries",
     "Headers.prototype.forEach",
     "Headers.prototype.get",
+    "Headers.prototype.getSetCookie",
     "Headers.prototype.has",
     "Headers.prototype.keys",
     "Headers.prototype.set",
@@ -3161,6 +3424,7 @@
     "Navigator.prototype.getGamepads",
     "Navigator.prototype.getInstalledRelatedApps",
     "Navigator.prototype.getUserMedia",
+    "Navigator.prototype.gpu",
     "Navigator.prototype.hardwareConcurrency",
     "Navigator.prototype.hid",
     "Navigator.prototype.ink",
@@ -3760,8 +4024,6 @@
     "OverconstrainedError",
     "OverconstrainedError.prototype",
     "OverconstrainedError.prototype.constraint",
-    "OverconstrainedError.prototype.message",
-    "OverconstrainedError.prototype.name",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -5902,6 +6164,7 @@
     "URLSearchParams.prototype.has",
     "URLSearchParams.prototype.keys",
     "URLSearchParams.prototype.set",
+    "URLSearchParams.prototype.size",
     "URLSearchParams.prototype.sort",
     "URLSearchParams.prototype.toString",
     "URLSearchParams.prototype.values",
```

  
#### 112.0.5615.165 (`2023-4-19`) 
No browser API changes.

  
#### 112.0.5615.121 (`2023-4-14`) 
No browser API changes.

  
#### 112.0.5615.49 (`2023-4-4`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_111.0.5563.146_to_112.0.5615.49.diff), [json](./browser_apis/chrome-stable_111.0.5563.146_to_112.0.5615.49.json), [full list](./browser_apis/chrome-stable_112.0.5615.49.json))
 ```diff
--- ./browser_apis/chrome-stable_111.0.5563.146.json	2023-04-13 09:08:46.814887976 +0000
+++ ./browser_apis/chrome-stable_112.0.5615.49.json	2023-04-13 09:09:15.255003645 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7716,
+  "browserApiCount": 7720,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -626,6 +626,9 @@
     "CSSStyleDeclaration.prototype.setProperty",
     "CSSStyleRule",
     "CSSStyleRule.prototype",
+    "CSSStyleRule.prototype.cssRules",
+    "CSSStyleRule.prototype.deleteRule",
+    "CSSStyleRule.prototype.insertRule",
     "CSSStyleRule.prototype.selectorText",
     "CSSStyleRule.prototype.style",
     "CSSStyleRule.prototype.styleMap",
@@ -4435,6 +4438,7 @@
     "RegExp.prototype.test",
     "RegExp.prototype.toString",
     "RegExp.prototype.unicode",
+    "RegExp.prototype.unicodeSets",
     "RegExp.rightContext",
     "RelativeOrientationSensor",
     "RelativeOrientationSensor.prototype",
```

  
#### 111.0.5563.146 (`2023-3-27`) 
No browser API changes.

  
#### 111.0.5563.110 (`2023-3-21`) 
No browser API changes.

  
#### 111.0.5563.64 (`2023-3-7`) ⚡
Added 16 APIs, removed 9 (see: [diff](./browser_apis/chrome-stable_110.0.5481.177_to_111.0.5563.64.diff), [json](./browser_apis/chrome-stable_110.0.5481.177_to_111.0.5563.64.json), [full list](./browser_apis/chrome-stable_111.0.5563.64.json))
 ```diff
--- ./browser_apis/chrome-stable_110.0.5481.177.json	2023-04-13 09:07:51.546664727 +0000
+++ ./browser_apis/chrome-stable_111.0.5563.64.json	2023-04-13 09:08:09.846735082 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7709,
+  "browserApiCount": 7716,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -117,6 +117,9 @@
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
     "ArrayBuffer.prototype.byteLength",
+    "ArrayBuffer.prototype.maxByteLength",
+    "ArrayBuffer.prototype.resizable",
+    "ArrayBuffer.prototype.resize",
     "ArrayBuffer.prototype.slice",
     "Atomics",
     "Atomics.add",
@@ -477,6 +480,8 @@
     "CSSAnimation.prototype.animationName",
     "CSSContainerRule",
     "CSSContainerRule.prototype",
+    "CSSContainerRule.prototype.containerName",
+    "CSSContainerRule.prototype.containerQuery",
     "CSSCounterStyleRule",
     "CSSCounterStyleRule.prototype",
     "CSSCounterStyleRule.prototype.additiveSymbols",
@@ -2100,6 +2105,7 @@
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
     "HTMLTemplateElement.prototype.shadowRoot",
+    "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
     "HTMLTextAreaElement.prototype.autocomplete",
@@ -3805,18 +3811,9 @@
     "PaymentAddress.prototype.region",
     "PaymentAddress.prototype.sortingCode",
     "PaymentAddress.prototype.toJSON",
-    "PaymentInstruments",
-    "PaymentInstruments.prototype",
-    "PaymentInstruments.prototype.clear",
-    "PaymentInstruments.prototype.delete",
-    "PaymentInstruments.prototype.get",
-    "PaymentInstruments.prototype.has",
-    "PaymentInstruments.prototype.keys",
-    "PaymentInstruments.prototype.set",
     "PaymentManager",
     "PaymentManager.prototype",
     "PaymentManager.prototype.enableDelegations",
-    "PaymentManager.prototype.instruments",
     "PaymentManager.prototype.userHint",
     "PaymentMethodChangeEvent",
     "PaymentMethodChangeEvent.prototype",
@@ -5578,6 +5575,7 @@
     "String.prototype.fontsize",
     "String.prototype.includes",
     "String.prototype.indexOf",
+    "String.prototype.isWellFormed",
     "String.prototype.italics",
     "String.prototype.lastIndexOf",
     "String.prototype.link",
@@ -5605,6 +5603,7 @@
     "String.prototype.toLowerCase",
     "String.prototype.toString",
     "String.prototype.toUpperCase",
+    "String.prototype.toWellFormed",
     "String.prototype.trim",
     "String.prototype.trimEnd",
     "String.prototype.trimStart",
@@ -6124,6 +6123,12 @@
     "VideoPlaybackQuality.prototype.creationTime",
     "VideoPlaybackQuality.prototype.droppedVideoFrames",
     "VideoPlaybackQuality.prototype.totalVideoFrames",
+    "ViewTransition",
+    "ViewTransition.prototype",
+    "ViewTransition.prototype.finished",
+    "ViewTransition.prototype.ready",
+    "ViewTransition.prototype.skipTransition",
+    "ViewTransition.prototype.updateCallbackDone",
     "VirtualKeyboard",
     "VirtualKeyboard.prototype",
     "VirtualKeyboard.prototype.boundingRect",
@@ -7052,6 +7057,7 @@
     "XMLDocument.prototype.rootElement",
     "XMLDocument.prototype.scripts",
     "XMLDocument.prototype.scrollingElement",
+    "XMLDocument.prototype.startViewTransition",
     "XMLDocument.prototype.styleSheets",
     "XMLDocument.prototype.timeline",
     "XMLDocument.prototype.title",
@@ -7239,6 +7245,7 @@
     "XRSession.prototype.depthDataFormat",
     "XRSession.prototype.depthUsage",
     "XRSession.prototype.domOverlayState",
+    "XRSession.prototype.enabledFeatures",
     "XRSession.prototype.end",
     "XRSession.prototype.environmentBlendMode",
     "XRSession.prototype.inputSources",
```

  
#### 110.0.5481.177 (`2023-2-22`) 
No browser API changes.

  
#### 110.0.5481.100 (`2023-2-14`) ⚡
Added 0 APIs, removed 60 (see: [diff](./browser_apis/chrome-stable_110.0.5481.96_to_110.0.5481.100.diff), [json](./browser_apis/chrome-stable_110.0.5481.96_to_110.0.5481.100.json), [full list](./browser_apis/chrome-stable_110.0.5481.100.json))
 ```diff
--- ./browser_apis/chrome-stable_110.0.5481.96.json	2023-02-15 01:09:07.180690561 +0000
+++ ./browser_apis/chrome-stable_110.0.5481.100.json	2023-02-15 01:09:38.779226338 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7769,
+  "browserApiCount": 7709,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -411,20 +411,6 @@
     "ByteLengthQueuingStrategy.prototype.size",
     "CDATASection",
     "CDATASection.prototype",
-    "CSPViolationReportBody",
-    "CSPViolationReportBody.prototype",
-    "CSPViolationReportBody.prototype.blockedURL",
-    "CSPViolationReportBody.prototype.columnNumber",
-    "CSPViolationReportBody.prototype.disposition",
-    "CSPViolationReportBody.prototype.documentURL",
-    "CSPViolationReportBody.prototype.effectiveDirective",
-    "CSPViolationReportBody.prototype.lineNumber",
-    "CSPViolationReportBody.prototype.originalPolicy",
-    "CSPViolationReportBody.prototype.referrer",
-    "CSPViolationReportBody.prototype.sample",
-    "CSPViolationReportBody.prototype.sourceFile",
-    "CSPViolationReportBody.prototype.statusCode",
-    "CSPViolationReportBody.prototype.toJSON",
     "CSS",
     "CSS.Hz",
     "CSS.Q",
@@ -869,17 +855,6 @@
     "CookieStoreManager.prototype.getSubscriptions",
     "CookieStoreManager.prototype.subscribe",
     "CookieStoreManager.prototype.unsubscribe",
-    "CoopAccessViolationReportBody",
-    "CoopAccessViolationReportBody.prototype",
-    "CoopAccessViolationReportBody.prototype.columnNumber",
-    "CoopAccessViolationReportBody.prototype.lineNumber",
-    "CoopAccessViolationReportBody.prototype.openeeURL",
-    "CoopAccessViolationReportBody.prototype.openerURL",
-    "CoopAccessViolationReportBody.prototype.otherDocumentURL",
-    "CoopAccessViolationReportBody.prototype.property",
-    "CoopAccessViolationReportBody.prototype.sourceFile",
-    "CoopAccessViolationReportBody.prototype.toJSON",
-    "CoopAccessViolationReportBody.prototype.type",
     "CountQueuingStrategy",
     "CountQueuingStrategy.prototype",
     "CountQueuingStrategy.prototype.highWaterMark",
@@ -1122,15 +1097,6 @@
     "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
-    "DeprecationReportBody",
-    "DeprecationReportBody.prototype",
-    "DeprecationReportBody.prototype.anticipatedRemoval",
-    "DeprecationReportBody.prototype.columnNumber",
-    "DeprecationReportBody.prototype.id",
-    "DeprecationReportBody.prototype.lineNumber",
-    "DeprecationReportBody.prototype.message",
-    "DeprecationReportBody.prototype.sourceFile",
-    "DeprecationReportBody.prototype.toJSON",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1153,15 +1119,6 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
-    "DocumentPolicyViolationReportBody",
-    "DocumentPolicyViolationReportBody.prototype",
-    "DocumentPolicyViolationReportBody.prototype.columnNumber",
-    "DocumentPolicyViolationReportBody.prototype.disposition",
-    "DocumentPolicyViolationReportBody.prototype.featureId",
-    "DocumentPolicyViolationReportBody.prototype.lineNumber",
-    "DocumentPolicyViolationReportBody.prototype.message",
-    "DocumentPolicyViolationReportBody.prototype.sourceFile",
-    "DocumentPolicyViolationReportBody.prototype.toJSON",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -2520,14 +2477,6 @@
     "IntersectionObserverEntry.prototype.rootBounds",
     "IntersectionObserverEntry.prototype.target",
     "IntersectionObserverEntry.prototype.time",
-    "InterventionReportBody",
-    "InterventionReportBody.prototype",
-    "InterventionReportBody.prototype.columnNumber",
-    "InterventionReportBody.prototype.id",
-    "InterventionReportBody.prototype.lineNumber",
-    "InterventionReportBody.prototype.message",
-    "InterventionReportBody.prototype.sourceFile",
-    "InterventionReportBody.prototype.toJSON",
     "Intl",
     "Intl.Collator",
     "Intl.Collator.prototype",
@@ -4501,15 +4450,6 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
-    "Report",
-    "Report.prototype",
-    "Report.prototype.body",
-    "Report.prototype.toJSON",
-    "Report.prototype.type",
-    "Report.prototype.url",
-    "ReportBody",
-    "ReportBody.prototype",
-    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
```

  
#### 110.0.5481.96 (`2023-2-13`) 
No browser API changes.

  
#### 110.0.5481.77 (`2023-2-7`) ⚡
Added 96 APIs, removed 20 (see: [diff](./browser_apis/chrome-stable_109.0.5414.119_to_110.0.5481.77.diff), [json](./browser_apis/chrome-stable_109.0.5414.119_to_110.0.5481.77.json), [full list](./browser_apis/chrome-stable_110.0.5481.77.json))
 ```diff
--- ./browser_apis/chrome-stable_109.0.5414.119.json	2023-02-08 01:07:09.517500266 +0000
+++ ./browser_apis/chrome-stable_110.0.5481.77.json	2023-02-08 01:07:44.273972962 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 7693,
+  "browserApiCount": 7769,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -106,9 +106,13 @@
     "Array.prototype.sort",
     "Array.prototype.splice",
     "Array.prototype.toLocaleString",
+    "Array.prototype.toReversed",
+    "Array.prototype.toSorted",
+    "Array.prototype.toSpliced",
     "Array.prototype.toString",
     "Array.prototype.unshift",
     "Array.prototype.values",
+    "Array.prototype.with",
     "ArrayBuffer",
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
@@ -210,8 +214,11 @@
     "AudioContext.prototype.createMediaStreamDestination",
     "AudioContext.prototype.createMediaStreamSource",
     "AudioContext.prototype.getOutputTimestamp",
+    "AudioContext.prototype.onsinkchange",
     "AudioContext.prototype.outputLatency",
     "AudioContext.prototype.resume",
+    "AudioContext.prototype.setSinkId",
+    "AudioContext.prototype.sinkId",
     "AudioContext.prototype.suspend",
     "AudioData",
     "AudioData.prototype",
@@ -291,6 +298,9 @@
     "AudioProcessingEvent.prototype.inputBuffer",
     "AudioProcessingEvent.prototype.outputBuffer",
     "AudioProcessingEvent.prototype.playbackTime",
+    "AudioSinkInfo",
+    "AudioSinkInfo.prototype",
+    "AudioSinkInfo.prototype.type",
     "AudioWorklet",
     "AudioWorklet.prototype",
     "AudioWorklet.prototype.addModule",
@@ -401,6 +411,20 @@
     "ByteLengthQueuingStrategy.prototype.size",
     "CDATASection",
     "CDATASection.prototype",
+    "CSPViolationReportBody",
+    "CSPViolationReportBody.prototype",
+    "CSPViolationReportBody.prototype.blockedURL",
+    "CSPViolationReportBody.prototype.columnNumber",
+    "CSPViolationReportBody.prototype.disposition",
+    "CSPViolationReportBody.prototype.documentURL",
+    "CSPViolationReportBody.prototype.effectiveDirective",
+    "CSPViolationReportBody.prototype.lineNumber",
+    "CSPViolationReportBody.prototype.originalPolicy",
+    "CSPViolationReportBody.prototype.referrer",
+    "CSPViolationReportBody.prototype.sample",
+    "CSPViolationReportBody.prototype.sourceFile",
+    "CSPViolationReportBody.prototype.statusCode",
+    "CSPViolationReportBody.prototype.toJSON",
     "CSS",
     "CSS.Hz",
     "CSS.Q",
@@ -700,27 +724,8 @@
     "CacheStorage.prototype.open",
     "CanvasCaptureMediaStreamTrack",
     "CanvasCaptureMediaStreamTrack.prototype",
-    "CanvasCaptureMediaStreamTrack.prototype.applyConstraints",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
-    "CanvasCaptureMediaStreamTrack.prototype.clone",
-    "CanvasCaptureMediaStreamTrack.prototype.constructor",
-    "CanvasCaptureMediaStreamTrack.prototype.contentHint",
-    "CanvasCaptureMediaStreamTrack.prototype.enabled",
-    "CanvasCaptureMediaStreamTrack.prototype.getCapabilities",
-    "CanvasCaptureMediaStreamTrack.prototype.getCaptureHandle",
-    "CanvasCaptureMediaStreamTrack.prototype.getConstraints",
-    "CanvasCaptureMediaStreamTrack.prototype.getSettings",
-    "CanvasCaptureMediaStreamTrack.prototype.id",
-    "CanvasCaptureMediaStreamTrack.prototype.kind",
-    "CanvasCaptureMediaStreamTrack.prototype.label",
-    "CanvasCaptureMediaStreamTrack.prototype.muted",
-    "CanvasCaptureMediaStreamTrack.prototype.oncapturehandlechange",
-    "CanvasCaptureMediaStreamTrack.prototype.onended",
-    "CanvasCaptureMediaStreamTrack.prototype.onmute",
-    "CanvasCaptureMediaStreamTrack.prototype.onunmute",
-    "CanvasCaptureMediaStreamTrack.prototype.readyState",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
-    "CanvasCaptureMediaStreamTrack.prototype.stop",
     "CanvasFilter",
     "CanvasFilter.prototype",
     "CanvasGradient",
@@ -864,6 +869,17 @@
     "CookieStoreManager.prototype.getSubscriptions",
     "CookieStoreManager.prototype.subscribe",
     "CookieStoreManager.prototype.unsubscribe",
+    "CoopAccessViolationReportBody",
+    "CoopAccessViolationReportBody.prototype",
+    "CoopAccessViolationReportBody.prototype.columnNumber",
+    "CoopAccessViolationReportBody.prototype.lineNumber",
+    "CoopAccessViolationReportBody.prototype.openeeURL",
+    "CoopAccessViolationReportBody.prototype.openerURL",
+    "CoopAccessViolationReportBody.prototype.otherDocumentURL",
+    "CoopAccessViolationReportBody.prototype.property",
+    "CoopAccessViolationReportBody.prototype.sourceFile",
+    "CoopAccessViolationReportBody.prototype.toJSON",
+    "CoopAccessViolationReportBody.prototype.type",
     "CountQueuingStrategy",
     "CountQueuingStrategy.prototype",
     "CountQueuingStrategy.prototype.highWaterMark",
@@ -1106,6 +1122,15 @@
     "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
+    "DeprecationReportBody",
+    "DeprecationReportBody.prototype",
+    "DeprecationReportBody.prototype.anticipatedRemoval",
+    "DeprecationReportBody.prototype.columnNumber",
+    "DeprecationReportBody.prototype.id",
+    "DeprecationReportBody.prototype.lineNumber",
+    "DeprecationReportBody.prototype.message",
+    "DeprecationReportBody.prototype.sourceFile",
+    "DeprecationReportBody.prototype.toJSON",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1128,6 +1153,15 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
+    "DocumentPolicyViolationReportBody",
+    "DocumentPolicyViolationReportBody.prototype",
+    "DocumentPolicyViolationReportBody.prototype.columnNumber",
+    "DocumentPolicyViolationReportBody.prototype.disposition",
+    "DocumentPolicyViolationReportBody.prototype.featureId",
+    "DocumentPolicyViolationReportBody.prototype.lineNumber",
+    "DocumentPolicyViolationReportBody.prototype.message",
+    "DocumentPolicyViolationReportBody.prototype.sourceFile",
+    "DocumentPolicyViolationReportBody.prototype.toJSON",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -1313,6 +1347,7 @@
     "FileSystemDirectoryHandle.prototype.kind",
     "FileSystemDirectoryHandle.prototype.name",
     "FileSystemDirectoryHandle.prototype.queryPermission",
+    "FileSystemDirectoryHandle.prototype.remove",
     "FileSystemDirectoryHandle.prototype.removeEntry",
     "FileSystemDirectoryHandle.prototype.requestPermission",
     "FileSystemDirectoryHandle.prototype.resolve",
@@ -1725,6 +1760,7 @@
     "HTMLIFrameElement.prototype.allowPaymentRequest",
     "HTMLIFrameElement.prototype.contentDocument",
     "HTMLIFrameElement.prototype.contentWindow",
+    "HTMLIFrameElement.prototype.credentialless",
     "HTMLIFrameElement.prototype.csp",
     "HTMLIFrameElement.prototype.featurePolicy",
     "HTMLIFrameElement.prototype.frameBorder",
@@ -2484,6 +2520,14 @@
     "IntersectionObserverEntry.prototype.rootBounds",
     "IntersectionObserverEntry.prototype.target",
     "IntersectionObserverEntry.prototype.time",
+    "InterventionReportBody",
+    "InterventionReportBody.prototype",
+    "InterventionReportBody.prototype.columnNumber",
+    "InterventionReportBody.prototype.id",
+    "InterventionReportBody.prototype.lineNumber",
+    "InterventionReportBody.prototype.message",
+    "InterventionReportBody.prototype.sourceFile",
+    "InterventionReportBody.prototype.toJSON",
     "Intl",
     "Intl.Collator",
     "Intl.Collator.prototype",
@@ -2622,6 +2666,7 @@
     "LaunchParams",
     "LaunchParams.prototype",
     "LaunchParams.prototype.files",
+    "LaunchParams.prototype.targetURL",
     "LaunchQueue",
     "LaunchQueue.prototype",
     "LaunchQueue.prototype.setConsumer",
@@ -2995,6 +3040,25 @@
     "MediaStreamTrackEvent.prototype.track",
     "MediaStreamTrackGenerator",
     "MediaStreamTrackGenerator.prototype",
+    "MediaStreamTrackGenerator.prototype.applyConstraints",
+    "MediaStreamTrackGenerator.prototype.clone",
+    "MediaStreamTrackGenerator.prototype.constructor",
+    "MediaStreamTrackGenerator.prototype.contentHint",
+    "MediaStreamTrackGenerator.prototype.enabled",
+    "MediaStreamTrackGenerator.prototype.getCapabilities",
+    "MediaStreamTrackGenerator.prototype.getCaptureHandle",
+    "MediaStreamTrackGenerator.prototype.getConstraints",
+    "MediaStreamTrackGenerator.prototype.getSettings",
+    "MediaStreamTrackGenerator.prototype.id",
+    "MediaStreamTrackGenerator.prototype.kind",
+    "MediaStreamTrackGenerator.prototype.label",
+    "MediaStreamTrackGenerator.prototype.muted",
+    "MediaStreamTrackGenerator.prototype.oncapturehandlechange",
+    "MediaStreamTrackGenerator.prototype.onended",
+    "MediaStreamTrackGenerator.prototype.onmute",
+    "MediaStreamTrackGenerator.prototype.onunmute",
+    "MediaStreamTrackGenerator.prototype.readyState",
+    "MediaStreamTrackGenerator.prototype.stop",
     "MediaStreamTrackGenerator.prototype.writable",
     "MediaStreamTrackProcessor",
     "MediaStreamTrackProcessor.prototype",
@@ -4437,6 +4501,15 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
+    "Report",
+    "Report.prototype",
+    "Report.prototype.body",
+    "Report.prototype.toJSON",
+    "Report.prototype.type",
+    "Report.prototype.url",
+    "ReportBody",
+    "ReportBody.prototype",
+    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
@@ -6019,7 +6092,10 @@
     "Uint8Array.prototype.sort",
     "Uint8Array.prototype.subarray",
     "Uint8Array.prototype.toLocaleString",
+    "Uint8Array.prototype.toReversed",
+    "Uint8Array.prototype.toSorted",
     "Uint8Array.prototype.values",
+    "Uint8Array.prototype.with",
     "Uint8ClampedArray",
     "Uint8ClampedArray.prototype",
     "UserActivation",
@@ -7360,6 +7436,7 @@
     "console.warn",
     "cookieStore",
     "createImageBitmap",
+    "credentialless",
     "crossOriginIsolated",
     "crypto",
     "customElements",
@@ -7675,7 +7752,6 @@
     "webkitSpeechRecognitionEvent.prototype",
     "webkitSpeechRecognitionEvent.prototype.resultIndex",
     "webkitSpeechRecognitionEvent.prototype.results",
-    "webkitStorageInfo",
     "webkitURL",
     "webkitURL.createObjectURL",
     "webkitURL.prototype",
```

  
#### 109.0.5414.119 (`2023-1-24`) 
No browser API changes.

  
#### 109.0.5414.74 (`2023-1-10`) ⚡
Added 110 APIs, removed 1 (see: [diff](./browser_apis/chrome-stable_108.0.5359.124_to_109.0.5414.74.diff), [json](./browser_apis/chrome-stable_108.0.5359.124_to_109.0.5414.74.json), [full list](./browser_apis/chrome-stable_109.0.5414.74.json))
 ```diff
--- ./browser_apis/chrome-stable_108.0.5359.124.json	2023-01-11 01:06:01.837413756 +0000
+++ ./browser_apis/chrome-stable_109.0.5414.74.json	2023-01-11 01:06:31.745581932 +0000
@@ -1,7 +1,6 @@
 {
   "browser": "chrome-stable",
-  "version": "108.0.0.0",
-  "browserApiCount": 7584,
+  "browserApiCount": 7693,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -804,6 +803,9 @@
     "CanvasRenderingContext2D.prototype.transform",
     "CanvasRenderingContext2D.prototype.translate",
     "CanvasRenderingContext2D.prototype.wordSpacing",
+    "CaptureController",
+    "CaptureController.prototype",
+    "CaptureController.prototype.setFocusBehavior",
     "ChannelMergerNode",
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
@@ -2743,6 +2745,112 @@
     "Math.tan",
     "Math.tanh",
     "Math.trunc",
+    "MathMLElement",
+    "MathMLElement.prototype",
+    "MathMLElement.prototype.attributeStyleMap",
+    "MathMLElement.prototype.autofocus",
+    "MathMLElement.prototype.blur",
+    "MathMLElement.prototype.dataset",
+    "MathMLElement.prototype.focus",
+    "MathMLElement.prototype.nonce",
+    "MathMLElement.prototype.onabort",
+    "MathMLElement.prototype.onanimationend",
+    "MathMLElement.prototype.onanimationiteration",
+    "MathMLElement.prototype.onanimationstart",
+    "MathMLElement.prototype.onauxclick",
+    "MathMLElement.prototype.onbeforeinput",
+    "MathMLElement.prototype.onbeforematch",
+    "MathMLElement.prototype.onbeforexrselect",
+    "MathMLElement.prototype.onblur",
+    "MathMLElement.prototype.oncancel",
+    "MathMLElement.prototype.oncanplay",
+    "MathMLElement.prototype.oncanplaythrough",
+    "MathMLElement.prototype.onchange",
+    "MathMLElement.prototype.onclick",
+    "MathMLElement.prototype.onclose",
+    "MathMLElement.prototype.oncontentvisibilityautostatechange",
+    "MathMLElement.prototype.oncontextlost",
+    "MathMLElement.prototype.oncontextmenu",
+    "MathMLElement.prototype.oncontextrestored",
+    "MathMLElement.prototype.oncopy",
+    "MathMLElement.prototype.oncuechange",
+    "MathMLElement.prototype.oncut",
+    "MathMLElement.prototype.ondblclick",
+    "MathMLElement.prototype.ondrag",
+    "MathMLElement.prototype.ondragend",
+    "MathMLElement.prototype.ondragenter",
+    "MathMLElement.prototype.ondragleave",
+    "MathMLElement.prototype.ondragover",
+    "MathMLElement.prototype.ondragstart",
+    "MathMLElement.prototype.ondrop",
+    "MathMLElement.prototype.ondurationchange",
+    "MathMLElement.prototype.onemptied",
+    "MathMLElement.prototype.onended",
+    "MathMLElement.prototype.onerror",
+    "MathMLElement.prototype.onfocus",
+    "MathMLElement.prototype.onformdata",
+    "MathMLElement.prototype.ongotpointercapture",
+    "MathMLElement.prototype.oninput",
+    "MathMLElement.prototype.oninvalid",
+    "MathMLElement.prototype.onkeydown",
+    "MathMLElement.prototype.onkeypress",
+    "MathMLElement.prototype.onkeyup",
+    "MathMLElement.prototype.onload",
+    "MathMLElement.prototype.onloadeddata",
+    "MathMLElement.prototype.onloadedmetadata",
+    "MathMLElement.prototype.onloadstart",
+    "MathMLElement.prototype.onlostpointercapture",
+    "MathMLElement.prototype.onmousedown",
+    "MathMLElement.prototype.onmouseenter",
+    "MathMLElement.prototype.onmouseleave",
+    "MathMLElement.prototype.onmousemove",
+    "MathMLElement.prototype.onmouseout",
+    "MathMLElement.prototype.onmouseover",
+    "MathMLElement.prototype.onmouseup",
+    "MathMLElement.prototype.onmousewheel",
+    "MathMLElement.prototype.onpaste",
+    "MathMLElement.prototype.onpause",
+    "MathMLElement.prototype.onplay",
+    "MathMLElement.prototype.onplaying",
+    "MathMLElement.prototype.onpointercancel",
+    "MathMLElement.prototype.onpointerdown",
+    "MathMLElement.prototype.onpointerenter",
+    "MathMLElement.prototype.onpointerleave",
+    "MathMLElement.prototype.onpointermove",
+    "MathMLElement.prototype.onpointerout",
+    "MathMLElement.prototype.onpointerover",
+    "MathMLElement.prototype.onpointerrawupdate",
+    "MathMLElement.prototype.onpointerup",
+    "MathMLElement.prototype.onprogress",
+    "MathMLElement.prototype.onratechange",
+    "MathMLElement.prototype.onreset",
+    "MathMLElement.prototype.onresize",
+    "MathMLElement.prototype.onscroll",
+    "MathMLElement.prototype.onsecuritypolicyviolation",
+    "MathMLElement.prototype.onseeked",
+    "MathMLElement.prototype.onseeking",
+    "MathMLElement.prototype.onselect",
+    "MathMLElement.prototype.onselectionchange",
+    "MathMLElement.prototype.onselectstart",
+    "MathMLElement.prototype.onslotchange",
+    "MathMLElement.prototype.onstalled",
+    "MathMLElement.prototype.onsubmit",
+    "MathMLElement.prototype.onsuspend",
+    "MathMLElement.prototype.ontimeupdate",
+    "MathMLElement.prototype.ontoggle",
+    "MathMLElement.prototype.ontransitioncancel",
+    "MathMLElement.prototype.ontransitionend",
+    "MathMLElement.prototype.ontransitionrun",
+    "MathMLElement.prototype.ontransitionstart",
+    "MathMLElement.prototype.onvolumechange",
+    "MathMLElement.prototype.onwaiting",
+    "MathMLElement.prototype.onwebkitanimationend",
+    "MathMLElement.prototype.onwebkitanimationiteration",
+    "MathMLElement.prototype.onwebkitanimationstart",
+    "MathMLElement.prototype.onwebkittransitionend",
+    "MathMLElement.prototype.onwheel",
+    "MathMLElement.prototype.style",
+    "MathMLElement.prototype.tabIndex",
     "MediaCapabilities",
     "MediaCapabilities.prototype",
     "MediaCapabilities.prototype.decodingInfo",
@@ -3828,6 +3936,7 @@
     "PerformanceResourceTiming.prototype.requestStart",
     "PerformanceResourceTiming.prototype.responseEnd",
     "PerformanceResourceTiming.prototype.responseStart",
+    "PerformanceResourceTiming.prototype.responseStatus",
     "PerformanceResourceTiming.prototype.secureConnectionStart",
     "PerformanceResourceTiming.prototype.serverTiming",
     "PerformanceResourceTiming.prototype.toJSON",
@@ -6638,7 +6747,6 @@
     "WheelEvent.prototype.constructor.prototype.eventPhase",
     "WheelEvent.prototype.constructor.prototype.initEvent",
     "WheelEvent.prototype.constructor.prototype.initUIEvent",
-    "WheelEvent.prototype.constructor.prototype.path",
     "WheelEvent.prototype.constructor.prototype.preventDefault",
     "WheelEvent.prototype.constructor.prototype.returnValue",
     "WheelEvent.prototype.constructor.prototype.sourceCapabilities",
```

  
#### 108.0.5359.124 (`2022-12-13`) 
No browser API changes.

  
### chrome-unstable
  
#### 118.0.5993.3 (`2023-9-7`) ⚡
Added 10 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_118.0.5979.0_to_118.0.5993.3.diff), [json](./browser_apis/chrome-unstable_118.0.5979.0_to_118.0.5993.3.json), [full list](./browser_apis/chrome-unstable_118.0.5993.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_118.0.5979.0.json	2023-09-08 00:52:08.436675387 +0000
+++ ./browser_apis/chrome-unstable_118.0.5993.3.json	2023-09-08 00:52:44.757025099 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8086,
+  "browserApiCount": 8096,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -423,6 +423,7 @@
     "CSS",
     "CSS.Hz",
     "CSS.Q",
+    "CSS.cap",
     "CSS.ch",
     "CSS.cm",
     "CSS.cqb",
@@ -447,8 +448,10 @@
     "CSS.fr",
     "CSS.grad",
     "CSS.highlights",
+    "CSS.ic",
     "CSS.in",
     "CSS.kHz",
+    "CSS.lh",
     "CSS.lvb",
     "CSS.lvh",
     "CSS.lvi",
@@ -464,8 +467,13 @@
     "CSS.pt",
     "CSS.px",
     "CSS.rad",
+    "CSS.rcap",
+    "CSS.rch",
     "CSS.registerProperty",
     "CSS.rem",
+    "CSS.rex",
+    "CSS.ric",
+    "CSS.rlh",
     "CSS.s",
     "CSS.supports",
     "CSS.svb",
@@ -481,6 +489,7 @@
     "CSS.vmax",
     "CSS.vmin",
     "CSS.vw",
+    "CSS.x",
     "CSSAnimation",
     "CSSAnimation.prototype",
     "CSSAnimation.prototype.animationName",
@@ -5170,6 +5179,7 @@
     "SVGGElement.prototype",
     "SVGImageElement",
     "SVGImageElement.prototype",
+    "SVGImageElement.prototype.crossOrigin",
     "SVGImageElement.prototype.decode",
     "SVGImageElement.prototype.decoding",
     "SVGImageElement.prototype.height",
```

  
#### 118.0.5979.0 (`2023-8-31`) ⚡
Added 5 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_118.0.5966.0_to_118.0.5979.0.diff), [json](./browser_apis/chrome-unstable_118.0.5966.0_to_118.0.5979.0.json), [full list](./browser_apis/chrome-unstable_118.0.5979.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_118.0.5966.0.json	2023-09-01 00:55:51.293611015 +0000
+++ ./browser_apis/chrome-unstable_118.0.5979.0.json	2023-09-01 00:56:25.665843969 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8081,
+  "browserApiCount": 8086,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3400,6 +3400,7 @@
     "NavigateEvent.prototype.destination",
     "NavigateEvent.prototype.downloadRequest",
     "NavigateEvent.prototype.formData",
+    "NavigateEvent.prototype.hasUAVisualTransition",
     "NavigateEvent.prototype.hashChange",
     "NavigateEvent.prototype.info",
     "NavigateEvent.prototype.intercept",
@@ -4361,6 +4362,7 @@
     "PointerEvent.prototype.width",
     "PopStateEvent",
     "PopStateEvent.prototype",
+    "PopStateEvent.prototype.hasUAVisualTransition",
     "PopStateEvent.prototype.state",
     "Presentation",
     "Presentation.prototype",
@@ -6088,8 +6090,11 @@
     "TextMetrics.prototype.actualBoundingBoxDescent",
     "TextMetrics.prototype.actualBoundingBoxLeft",
     "TextMetrics.prototype.actualBoundingBoxRight",
+    "TextMetrics.prototype.alphabeticBaseline",
     "TextMetrics.prototype.fontBoundingBoxAscent",
     "TextMetrics.prototype.fontBoundingBoxDescent",
+    "TextMetrics.prototype.hangingBaseline",
+    "TextMetrics.prototype.ideographicBaseline",
     "TextMetrics.prototype.width",
     "TextTrack",
     "TextTrack.prototype",
```

  
#### 118.0.5966.0 (`2023-8-24`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_118.0.5951.0_to_118.0.5966.0.diff), [json](./browser_apis/chrome-unstable_118.0.5951.0_to_118.0.5966.0.json), [full list](./browser_apis/chrome-unstable_118.0.5966.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_118.0.5951.0.json	2023-08-25 00:52:16.435773570 +0000
+++ ./browser_apis/chrome-unstable_118.0.5966.0.json	2023-08-25 00:52:47.585614544 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8077,
+  "browserApiCount": 8081,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -609,6 +609,10 @@
     "CSSScale.prototype.x",
     "CSSScale.prototype.y",
     "CSSScale.prototype.z",
+    "CSSScopeRule",
+    "CSSScopeRule.prototype",
+    "CSSScopeRule.prototype.end",
+    "CSSScopeRule.prototype.start",
     "CSSSkew",
     "CSSSkew.prototype",
     "CSSSkew.prototype.ax",
```

  
#### 118.0.5951.0 (`2023-8-17`) 
No browser API changes.

  
#### 117.0.5938.0 (`2023-8-10`) 
No browser API changes.

  
#### 117.0.5927.0 (`2023-8-4`) 
No browser API changes.

  
#### 117.0.5911.2 (`2023-7-27`) ⚡
Added 19 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_117.0.5897.3_to_117.0.5911.2.diff), [json](./browser_apis/chrome-unstable_117.0.5897.3_to_117.0.5911.2.json), [full list](./browser_apis/chrome-unstable_117.0.5911.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_117.0.5897.3.json	2023-07-28 01:00:41.696068248 +0000
+++ ./browser_apis/chrome-unstable_117.0.5911.2.json	2023-07-28 01:01:09.304627642 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8058,
+  "browserApiCount": 8077,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -901,6 +901,7 @@
     "CustomElementRegistry.prototype",
     "CustomElementRegistry.prototype.define",
     "CustomElementRegistry.prototype.get",
+    "CustomElementRegistry.prototype.getName",
     "CustomElementRegistry.prototype.upgrade",
     "CustomElementRegistry.prototype.whenDefined",
     "CustomEvent",
@@ -2017,6 +2018,7 @@
     "HTMLIFrameElement.prototype.marginHeight",
     "HTMLIFrameElement.prototype.marginWidth",
     "HTMLIFrameElement.prototype.name",
+    "HTMLIFrameElement.prototype.privateToken",
     "HTMLIFrameElement.prototype.referrerPolicy",
     "HTMLIFrameElement.prototype.sandbox",
     "HTMLIFrameElement.prototype.scrolling",
@@ -2856,6 +2858,20 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
+    "Iterator",
+    "Iterator.from",
+    "Iterator.prototype",
+    "Iterator.prototype.drop",
+    "Iterator.prototype.every",
+    "Iterator.prototype.filter",
+    "Iterator.prototype.find",
+    "Iterator.prototype.flatMap",
+    "Iterator.prototype.forEach",
+    "Iterator.prototype.map",
+    "Iterator.prototype.reduce",
+    "Iterator.prototype.some",
+    "Iterator.prototype.take",
+    "Iterator.prototype.toArray",
     "JSON",
     "JSON.isRawJSON",
     "JSON.parse",
@@ -7252,6 +7268,8 @@
     "XMLDocument.prototype.getElementsByTagNameNS",
     "XMLDocument.prototype.getSelection",
     "XMLDocument.prototype.hasFocus",
+    "XMLDocument.prototype.hasPrivateToken",
+    "XMLDocument.prototype.hasRedemptionRecord",
     "XMLDocument.prototype.head",
     "XMLDocument.prototype.hidden",
     "XMLDocument.prototype.images",
@@ -7431,6 +7449,7 @@
     "XMLHttpRequest.prototype.responseURL",
     "XMLHttpRequest.prototype.responseXML",
     "XMLHttpRequest.prototype.send",
+    "XMLHttpRequest.prototype.setPrivateToken",
     "XMLHttpRequest.prototype.setRequestHeader",
     "XMLHttpRequest.prototype.status",
     "XMLHttpRequest.prototype.statusText",
```

  
#### 117.0.5897.3 (`2023-7-21`) ⚡
Added 8 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_116.0.5845.42_to_117.0.5897.3.diff), [json](./browser_apis/chrome-unstable_116.0.5845.42_to_117.0.5897.3.json), [full list](./browser_apis/chrome-unstable_117.0.5897.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_116.0.5845.42.json	2023-07-22 01:06:52.650740792 +0000
+++ ./browser_apis/chrome-unstable_117.0.5897.3.json	2023-07-22 01:07:51.500154810 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8050,
+  "browserApiCount": 8058,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -619,6 +619,8 @@
     "CSSSkewY",
     "CSSSkewY.prototype",
     "CSSSkewY.prototype.ay",
+    "CSSStartingStyleRule",
+    "CSSStartingStyleRule.prototype",
     "CSSStyleDeclaration",
     "CSSStyleDeclaration.prototype",
     "CSSStyleDeclaration.prototype.cssFloat",
@@ -2988,6 +2990,7 @@
     "MIDIOutputMap.prototype.size",
     "MIDIOutputMap.prototype.values",
     "Map",
+    "Map.groupBy",
     "Map.prototype",
     "Map.prototype.clear",
     "Map.prototype.delete",
@@ -3582,6 +3585,7 @@
     "Object.getOwnPropertyNames",
     "Object.getOwnPropertySymbols",
     "Object.getPrototypeOf",
+    "Object.groupBy",
     "Object.hasOwn",
     "Object.is",
     "Object.isExtensible",
@@ -4232,6 +4236,7 @@
     "PerformanceResourceTiming.prototype.connectEnd",
     "PerformanceResourceTiming.prototype.connectStart",
     "PerformanceResourceTiming.prototype.decodedBodySize",
+    "PerformanceResourceTiming.prototype.deliveryType",
     "PerformanceResourceTiming.prototype.domainLookupEnd",
     "PerformanceResourceTiming.prototype.domainLookupStart",
     "PerformanceResourceTiming.prototype.encodedBodySize",
@@ -4578,10 +4583,13 @@
     "RTCRtpTransceiver.prototype",
     "RTCRtpTransceiver.prototype.currentDirection",
     "RTCRtpTransceiver.prototype.direction",
+    "RTCRtpTransceiver.prototype.getHeaderExtensionsToNegotiate",
+    "RTCRtpTransceiver.prototype.getNegotiatedHeaderExtensions",
     "RTCRtpTransceiver.prototype.mid",
     "RTCRtpTransceiver.prototype.receiver",
     "RTCRtpTransceiver.prototype.sender",
     "RTCRtpTransceiver.prototype.setCodecPreferences",
+    "RTCRtpTransceiver.prototype.setHeaderExtensionsToNegotiate",
     "RTCRtpTransceiver.prototype.stop",
     "RTCRtpTransceiver.prototype.stopped",
     "RTCSctpTransport",
```

  
#### 116.0.5845.42 (`2023-7-19`) 
No browser API changes.

  
#### 116.0.5845.32 (`2023-7-13`) 
No browser API changes.

  
#### 116.0.5845.14 (`2023-6-30`) 
No browser API changes.

  
#### 116.0.5845.4 (`2023-6-23`) ⚡
Added 12 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_116.0.5829.0_to_116.0.5845.4.diff), [json](./browser_apis/chrome-unstable_116.0.5829.0_to_116.0.5845.4.json), [full list](./browser_apis/chrome-unstable_116.0.5845.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_116.0.5829.0.json	2023-06-24 01:17:22.324924025 +0000
+++ ./browser_apis/chrome-unstable_116.0.5845.4.json	2023-06-24 01:18:02.145126518 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8038,
+  "browserApiCount": 8050,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1131,6 +1131,14 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
+    "DocumentPictureInPicture",
+    "DocumentPictureInPicture.prototype",
+    "DocumentPictureInPicture.prototype.onenter",
+    "DocumentPictureInPicture.prototype.requestWindow",
+    "DocumentPictureInPicture.prototype.window",
+    "DocumentPictureInPictureEvent",
+    "DocumentPictureInPictureEvent.prototype",
+    "DocumentPictureInPictureEvent.prototype.window",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -2626,6 +2634,9 @@
     "IdentityCredential",
     "IdentityCredential.prototype",
     "IdentityCredential.prototype.token",
+    "IdentityProvider",
+    "IdentityProvider.getUserInfo",
+    "IdentityProvider.prototype",
     "IdleDeadline",
     "IdleDeadline.prototype",
     "IdleDeadline.prototype.didTimeout",
@@ -7711,6 +7722,7 @@
     "decodeURIComponent",
     "devicePixelRatio",
     "document",
+    "documentPictureInPicture",
     "encodeURI",
     "encodeURIComponent",
     "escape",
```

  
#### 116.0.5829.0 (`2023-6-15`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_116.0.5817.0_to_116.0.5829.0.diff), [json](./browser_apis/chrome-unstable_116.0.5817.0_to_116.0.5829.0.json), [full list](./browser_apis/chrome-unstable_116.0.5829.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_116.0.5817.0.json	2023-06-16 01:09:02.431426859 +0000
+++ ./browser_apis/chrome-unstable_116.0.5829.0.json	2023-06-16 01:09:46.943909338 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8037,
+  "browserApiCount": 8038,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4191,6 +4191,7 @@
     "PerformanceNavigationTiming",
     "PerformanceNavigationTiming.prototype",
     "PerformanceNavigationTiming.prototype.activationStart",
+    "PerformanceNavigationTiming.prototype.criticalCHRestart",
     "PerformanceNavigationTiming.prototype.domComplete",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventEnd",
     "PerformanceNavigationTiming.prototype.domContentLoadedEventStart",
```

  
#### 116.0.5817.0 (`2023-6-8`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_116.0.5803.2_to_116.0.5817.0.diff), [json](./browser_apis/chrome-unstable_116.0.5803.2_to_116.0.5817.0.json), [full list](./browser_apis/chrome-unstable_116.0.5817.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_116.0.5803.2.json	2023-06-09 01:13:41.063492501 +0000
+++ ./browser_apis/chrome-unstable_116.0.5817.0.json	2023-06-09 01:14:27.484683856 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8035,
+  "browserApiCount": 8037,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -5984,10 +5984,12 @@
     "TaskPriorityChangeEvent.prototype",
     "TaskPriorityChangeEvent.prototype.previousPriority",
     "TaskSignal",
+    "TaskSignal.any",
     "TaskSignal.prototype",
     "TaskSignal.prototype.aborted",
     "TaskSignal.prototype.constructor",
     "TaskSignal.prototype.constructor.abort",
+    "TaskSignal.prototype.constructor.any",
     "TaskSignal.prototype.constructor.timeout",
     "TaskSignal.prototype.onabort",
     "TaskSignal.prototype.onprioritychange",
```

  
#### 116.0.5803.2 (`2023-6-1`) 
No browser API changes.

  
#### 115.0.5790.3 (`2023-5-25`) ⚡
Added 9 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_115.0.5773.4_to_115.0.5790.3.diff), [json](./browser_apis/chrome-unstable_115.0.5773.4_to_115.0.5790.3.json), [full list](./browser_apis/chrome-unstable_115.0.5790.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_115.0.5773.4.json	2023-05-26 01:02:17.604443991 +0000
+++ ./browser_apis/chrome-unstable_115.0.5790.3.json	2023-05-26 01:02:57.664830239 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8027,
+  "browserApiCount": 8035,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -73,7 +73,6 @@
     "AnimationTimeline.prototype",
     "AnimationTimeline.prototype.currentTime",
     "AnimationTimeline.prototype.duration",
-    "AnimationTimeline.prototype.getCurrentTime",
     "Array",
     "Array.from",
     "Array.isArray",
@@ -1391,6 +1390,7 @@
     "GPU.prototype",
     "GPU.prototype.getPreferredCanvasFormat",
     "GPU.prototype.requestAdapter",
+    "GPU.prototype.wgslLanguageFeatures",
     "GPUAdapter",
     "GPUAdapter.prototype",
     "GPUAdapter.prototype.features",
@@ -6455,6 +6455,14 @@
     "VisualViewport.prototype.pageTop",
     "VisualViewport.prototype.scale",
     "VisualViewport.prototype.width",
+    "WGSLLanguageFeatures",
+    "WGSLLanguageFeatures.prototype",
+    "WGSLLanguageFeatures.prototype.entries",
+    "WGSLLanguageFeatures.prototype.forEach",
+    "WGSLLanguageFeatures.prototype.has",
+    "WGSLLanguageFeatures.prototype.keys",
+    "WGSLLanguageFeatures.prototype.size",
+    "WGSLLanguageFeatures.prototype.values",
     "WakeLock",
     "WakeLock.prototype",
     "WakeLock.prototype.request",
```

  
#### 115.0.5773.4 (`2023-5-18`) ⚡
Added 14 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_115.0.5762.4_to_115.0.5773.4.diff), [json](./browser_apis/chrome-unstable_115.0.5762.4_to_115.0.5773.4.json), [full list](./browser_apis/chrome-unstable_115.0.5773.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_115.0.5762.4.json	2023-05-19 01:02:54.381623790 +0000
+++ ./browser_apis/chrome-unstable_115.0.5773.4.json	2023-05-19 01:03:34.361378753 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8013,
+  "browserApiCount": 8027,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -52,6 +52,8 @@
     "Animation.prototype.play",
     "Animation.prototype.playState",
     "Animation.prototype.playbackRate",
+    "Animation.prototype.rangeEnd",
+    "Animation.prototype.rangeStart",
     "Animation.prototype.ready",
     "Animation.prototype.replaceState",
     "Animation.prototype.reverse",
@@ -70,6 +72,8 @@
     "AnimationTimeline",
     "AnimationTimeline.prototype",
     "AnimationTimeline.prototype.currentTime",
+    "AnimationTimeline.prototype.duration",
+    "AnimationTimeline.prototype.getCurrentTime",
     "Array",
     "Array.from",
     "Array.isArray",
@@ -4220,6 +4224,7 @@
     "PerformanceResourceTiming.prototype.domainLookupStart",
     "PerformanceResourceTiming.prototype.encodedBodySize",
     "PerformanceResourceTiming.prototype.fetchStart",
+    "PerformanceResourceTiming.prototype.firstInterimResponseStart",
     "PerformanceResourceTiming.prototype.initiatorType",
     "PerformanceResourceTiming.prototype.nextHopProtocol",
     "PerformanceResourceTiming.prototype.redirectEnd",
@@ -5617,6 +5622,10 @@
     "ScriptProcessorNode.prototype",
     "ScriptProcessorNode.prototype.bufferSize",
     "ScriptProcessorNode.prototype.onaudioprocess",
+    "ScrollTimeline",
+    "ScrollTimeline.prototype",
+    "ScrollTimeline.prototype.axis",
+    "ScrollTimeline.prototype.source",
     "SecurityPolicyViolationEvent",
     "SecurityPolicyViolationEvent.prototype",
     "SecurityPolicyViolationEvent.prototype.blockedURI",
@@ -6413,6 +6422,11 @@
     "VideoPlaybackQuality.prototype.creationTime",
     "VideoPlaybackQuality.prototype.droppedVideoFrames",
     "VideoPlaybackQuality.prototype.totalVideoFrames",
+    "ViewTimeline",
+    "ViewTimeline.prototype",
+    "ViewTimeline.prototype.endOffset",
+    "ViewTimeline.prototype.startOffset",
+    "ViewTimeline.prototype.subject",
     "ViewTransition",
     "ViewTransition.prototype",
     "ViewTransition.prototype.finished",
```

  
#### 115.0.5762.4 (`2023-5-11`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_115.0.5750.0_to_115.0.5762.4.diff), [json](./browser_apis/chrome-unstable_115.0.5750.0_to_115.0.5762.4.json), [full list](./browser_apis/chrome-unstable_115.0.5762.4.json))
 ```diff
--- ./browser_apis/chrome-unstable_115.0.5750.0.json	2023-05-12 01:02:12.997626591 +0000
+++ ./browser_apis/chrome-unstable_115.0.5762.4.json	2023-05-12 01:02:44.902211585 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8012,
+  "browserApiCount": 8013,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -6491,6 +6491,7 @@
     "WebAssembly.Instance",
     "WebAssembly.Instance.prototype",
     "WebAssembly.Instance.prototype.exports",
+    "WebAssembly.JSTag",
     "WebAssembly.LinkError",
     "WebAssembly.LinkError.prototype",
     "WebAssembly.Memory",
```

  
#### 115.0.5750.0 (`2023-5-5`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_114.0.5735.6_to_115.0.5750.0.diff), [json](./browser_apis/chrome-unstable_114.0.5735.6_to_115.0.5750.0.json), [full list](./browser_apis/chrome-unstable_115.0.5750.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_114.0.5735.6.json	2023-05-06 00:57:25.284446659 +0000
+++ ./browser_apis/chrome-unstable_115.0.5750.0.json	2023-05-06 00:58:30.497127555 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8010,
+  "browserApiCount": 8012,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -6428,6 +6428,8 @@
     "VirtualKeyboard.prototype.show",
     "VirtualKeyboardGeometryChangeEvent",
     "VirtualKeyboardGeometryChangeEvent.prototype",
+    "VisibilityStateEntry",
+    "VisibilityStateEntry.prototype",
     "VisualViewport",
     "VisualViewport.prototype",
     "VisualViewport.prototype.height",
```

  
#### 114.0.5735.6 (`2023-4-27`) ⚡
Added 5 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_114.0.5720.4_to_114.0.5735.6.diff), [json](./browser_apis/chrome-unstable_114.0.5720.4_to_114.0.5735.6.json), [full list](./browser_apis/chrome-unstable_114.0.5735.6.json))
 ```diff
--- ./browser_apis/chrome-unstable_114.0.5720.4.json	2023-04-28 01:03:14.259813956 +0000
+++ ./browser_apis/chrome-unstable_114.0.5735.6.json	2023-04-28 01:03:42.601765964 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8006,
+  "browserApiCount": 8010,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1607,7 +1607,6 @@
     "GPUSupportedLimits.prototype.maxComputeWorkgroupsPerDimension",
     "GPUSupportedLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout",
     "GPUSupportedLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout",
-    "GPUSupportedLimits.prototype.maxFragmentCombinedOutputResources",
     "GPUSupportedLimits.prototype.maxInterStageShaderComponents",
     "GPUSupportedLimits.prototype.maxInterStageShaderVariables",
     "GPUSupportedLimits.prototype.maxSampledTexturesPerShaderStage",
@@ -3103,6 +3102,7 @@
     "MathMLElement.prototype.onreset",
     "MathMLElement.prototype.onresize",
     "MathMLElement.prototype.onscroll",
+    "MathMLElement.prototype.onscrollend",
     "MathMLElement.prototype.onsecuritypolicyviolation",
     "MathMLElement.prototype.onseeked",
     "MathMLElement.prototype.onseeking",
@@ -3944,6 +3944,7 @@
     "Option.prototype.constructor.prototype.onreset",
     "Option.prototype.constructor.prototype.onresize",
     "Option.prototype.constructor.prototype.onscroll",
+    "Option.prototype.constructor.prototype.onscrollend",
     "Option.prototype.constructor.prototype.onsearch",
     "Option.prototype.constructor.prototype.onsecuritypolicyviolation",
     "Option.prototype.constructor.prototype.onseeked",
@@ -5537,6 +5538,7 @@
     "SVGViewElement.prototype.onreset",
     "SVGViewElement.prototype.onresize",
     "SVGViewElement.prototype.onscroll",
+    "SVGViewElement.prototype.onscrollend",
     "SVGViewElement.prototype.onsecuritypolicyviolation",
     "SVGViewElement.prototype.onseeked",
     "SVGViewElement.prototype.onseeking",
@@ -7298,6 +7300,7 @@
     "XMLDocument.prototype.onresize",
     "XMLDocument.prototype.onresume",
     "XMLDocument.prototype.onscroll",
+    "XMLDocument.prototype.onscrollend",
     "XMLDocument.prototype.onsearch",
     "XMLDocument.prototype.onsecuritypolicyviolation",
     "XMLDocument.prototype.onseeked",
@@ -7803,6 +7806,7 @@
     "onreset",
     "onresize",
     "onscroll",
+    "onscrollend",
     "onsearch",
     "onsecuritypolicyviolation",
     "onseeked",
```

  
#### 114.0.5720.4 (`2023-4-20`) 
No browser API changes.

  
#### 114.0.5696.0 (`2023-4-6`) ⚡
Added 22 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_113.0.5672.24_to_114.0.5696.0.diff), [json](./browser_apis/chrome-unstable_113.0.5672.24_to_114.0.5696.0.json), [full list](./browser_apis/chrome-unstable_114.0.5696.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_113.0.5672.24.json	2023-04-13 09:11:42.243626955 +0000
+++ ./browser_apis/chrome-unstable_114.0.5696.0.json	2023-04-13 09:12:01.931710633 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7984,
+  "browserApiCount": 8006,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -117,10 +117,13 @@
     "ArrayBuffer.isView",
     "ArrayBuffer.prototype",
     "ArrayBuffer.prototype.byteLength",
+    "ArrayBuffer.prototype.detached",
     "ArrayBuffer.prototype.maxByteLength",
     "ArrayBuffer.prototype.resizable",
     "ArrayBuffer.prototype.resize",
     "ArrayBuffer.prototype.slice",
+    "ArrayBuffer.prototype.transfer",
+    "ArrayBuffer.prototype.transferToFixedLength",
     "Atomics",
     "Atomics.add",
     "Atomics.and",
@@ -1834,6 +1837,8 @@
     "HTMLButtonElement.prototype.formTarget",
     "HTMLButtonElement.prototype.labels",
     "HTMLButtonElement.prototype.name",
+    "HTMLButtonElement.prototype.popoverTargetAction",
+    "HTMLButtonElement.prototype.popoverTargetElement",
     "HTMLButtonElement.prototype.reportValidity",
     "HTMLButtonElement.prototype.setCustomValidity",
     "HTMLButtonElement.prototype.type",
@@ -2037,6 +2042,8 @@
     "HTMLInputElement.prototype.name",
     "HTMLInputElement.prototype.pattern",
     "HTMLInputElement.prototype.placeholder",
+    "HTMLInputElement.prototype.popoverTargetAction",
+    "HTMLInputElement.prototype.popoverTargetElement",
     "HTMLInputElement.prototype.readOnly",
     "HTMLInputElement.prototype.reportValidity",
     "HTMLInputElement.prototype.required",
@@ -2834,7 +2841,9 @@
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
     "JSON",
+    "JSON.isRawJSON",
     "JSON.parse",
+    "JSON.rawJSON",
     "JSON.stringify",
     "Keyboard",
     "Keyboard.prototype",
@@ -3027,6 +3036,7 @@
     "MathMLElement.prototype.onauxclick",
     "MathMLElement.prototype.onbeforeinput",
     "MathMLElement.prototype.onbeforematch",
+    "MathMLElement.prototype.onbeforetoggle",
     "MathMLElement.prototype.onbeforexrselect",
     "MathMLElement.prototype.onblur",
     "MathMLElement.prototype.oncancel",
@@ -3833,6 +3843,7 @@
     "Option.prototype.constructor.prototype.hasAttributes",
     "Option.prototype.constructor.prototype.hasPointerCapture",
     "Option.prototype.constructor.prototype.hidden",
+    "Option.prototype.constructor.prototype.hidePopover",
     "Option.prototype.constructor.prototype.id",
     "Option.prototype.constructor.prototype.inert",
     "Option.prototype.constructor.prototype.innerHTML",
@@ -3864,6 +3875,7 @@
     "Option.prototype.constructor.prototype.onbeforeinput",
     "Option.prototype.constructor.prototype.onbeforematch",
     "Option.prototype.constructor.prototype.onbeforepaste",
+    "Option.prototype.constructor.prototype.onbeforetoggle",
     "Option.prototype.constructor.prototype.onbeforexrselect",
     "Option.prototype.constructor.prototype.onblur",
     "Option.prototype.constructor.prototype.oncancel",
@@ -3961,6 +3973,7 @@
     "Option.prototype.constructor.prototype.outerHTML",
     "Option.prototype.constructor.prototype.outerText",
     "Option.prototype.constructor.prototype.part",
+    "Option.prototype.constructor.prototype.popover",
     "Option.prototype.constructor.prototype.prefix",
     "Option.prototype.constructor.prototype.prepend",
     "Option.prototype.constructor.prototype.previousElementSibling",
@@ -3992,6 +4005,7 @@
     "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
+    "Option.prototype.constructor.prototype.showPopover",
     "Option.prototype.constructor.prototype.slot",
     "Option.prototype.constructor.prototype.spellcheck",
     "Option.prototype.constructor.prototype.style",
@@ -3999,6 +4013,7 @@
     "Option.prototype.constructor.prototype.tagName",
     "Option.prototype.constructor.prototype.title",
     "Option.prototype.constructor.prototype.toggleAttribute",
+    "Option.prototype.constructor.prototype.togglePopover",
     "Option.prototype.constructor.prototype.translate",
     "Option.prototype.constructor.prototype.virtualKeyboardPolicy",
     "Option.prototype.constructor.prototype.webkitMatchesSelector",
@@ -5455,6 +5470,7 @@
     "SVGViewElement.prototype.onauxclick",
     "SVGViewElement.prototype.onbeforeinput",
     "SVGViewElement.prototype.onbeforematch",
+    "SVGViewElement.prototype.onbeforetoggle",
     "SVGViewElement.prototype.onbeforexrselect",
     "SVGViewElement.prototype.onblur",
     "SVGViewElement.prototype.oncancel",
@@ -6050,6 +6066,10 @@
     "TimeRanges.prototype.end",
     "TimeRanges.prototype.length",
     "TimeRanges.prototype.start",
+    "ToggleEvent",
+    "ToggleEvent.prototype",
+    "ToggleEvent.prototype.newState",
+    "ToggleEvent.prototype.oldState",
     "Touch",
     "Touch.prototype",
     "Touch.prototype.clientX",
@@ -7203,6 +7223,7 @@
     "XMLDocument.prototype.onbeforeinput",
     "XMLDocument.prototype.onbeforematch",
     "XMLDocument.prototype.onbeforepaste",
+    "XMLDocument.prototype.onbeforetoggle",
     "XMLDocument.prototype.onbeforexrselect",
     "XMLDocument.prototype.onblur",
     "XMLDocument.prototype.oncancel",
@@ -7704,6 +7725,7 @@
     "onbeforeinstallprompt",
     "onbeforematch",
     "onbeforeprint",
+    "onbeforetoggle",
     "onbeforeunload",
     "onbeforexrselect",
     "onblur",
```

  
#### 113.0.5672.24 (`2023-4-4`) 
No browser API changes.

  
#### 113.0.5672.12 (`2023-3-30`) 
No browser API changes.

  
#### 113.0.5668.0 (`2023-3-24`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_113.0.5653.0_to_113.0.5668.0.diff), [json](./browser_apis/chrome-unstable_113.0.5653.0_to_113.0.5668.0.json), [full list](./browser_apis/chrome-unstable_113.0.5668.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_113.0.5653.0.json	2023-04-13 09:10:39.055358588 +0000
+++ ./browser_apis/chrome-unstable_113.0.5668.0.json	2023-04-13 09:11:00.787446258 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7983,
+  "browserApiCount": 7984,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2459,6 +2459,7 @@
     "Headers.prototype.entries",
     "Headers.prototype.forEach",
     "Headers.prototype.get",
+    "Headers.prototype.getSetCookie",
     "Headers.prototype.has",
     "Headers.prototype.keys",
     "Headers.prototype.set",
```

  
#### 113.0.5653.0 (`2023-3-16`) ⚡
Added 266 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_113.0.5638.0_to_113.0.5653.0.diff), [json](./browser_apis/chrome-unstable_113.0.5638.0_to_113.0.5653.0.json), [full list](./browser_apis/chrome-unstable_113.0.5653.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_113.0.5638.0.json	2023-04-13 09:10:18.355267823 +0000
+++ ./browser_apis/chrome-unstable_113.0.5653.0.json	2023-04-13 09:10:39.055358588 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7717,
+  "browserApiCount": 7983,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1380,6 +1380,271 @@
     "FormDataEvent.prototype.formData",
     "FragmentDirective",
     "FragmentDirective.prototype",
+    "GPU",
+    "GPU.prototype",
+    "GPU.prototype.getPreferredCanvasFormat",
+    "GPU.prototype.requestAdapter",
+    "GPUAdapter",
+    "GPUAdapter.prototype",
+    "GPUAdapter.prototype.features",
+    "GPUAdapter.prototype.isFallbackAdapter",
+    "GPUAdapter.prototype.limits",
+    "GPUAdapter.prototype.requestAdapterInfo",
+    "GPUAdapter.prototype.requestDevice",
+    "GPUAdapterInfo",
+    "GPUAdapterInfo.prototype",
+    "GPUAdapterInfo.prototype.architecture",
+    "GPUAdapterInfo.prototype.description",
+    "GPUAdapterInfo.prototype.device",
+    "GPUAdapterInfo.prototype.vendor",
+    "GPUBindGroup",
+    "GPUBindGroup.prototype",
+    "GPUBindGroup.prototype.label",
+    "GPUBindGroupLayout",
+    "GPUBindGroupLayout.prototype",
+    "GPUBindGroupLayout.prototype.label",
+    "GPUBuffer",
+    "GPUBuffer.prototype",
+    "GPUBuffer.prototype.destroy",
+    "GPUBuffer.prototype.getMappedRange",
+    "GPUBuffer.prototype.label",
+    "GPUBuffer.prototype.mapAsync",
+    "GPUBuffer.prototype.mapState",
+    "GPUBuffer.prototype.size",
+    "GPUBuffer.prototype.unmap",
+    "GPUBuffer.prototype.usage",
+    "GPUBufferUsage",
+    "GPUCanvasContext",
+    "GPUCanvasContext.prototype",
+    "GPUCanvasContext.prototype.canvas",
+    "GPUCanvasContext.prototype.configure",
+    "GPUCanvasContext.prototype.getCurrentTexture",
+    "GPUCanvasContext.prototype.unconfigure",
+    "GPUColorWrite",
+    "GPUCommandBuffer",
+    "GPUCommandBuffer.prototype",
+    "GPUCommandBuffer.prototype.label",
+    "GPUCommandEncoder",
+    "GPUCommandEncoder.prototype",
+    "GPUCommandEncoder.prototype.beginComputePass",
+    "GPUCommandEncoder.prototype.beginRenderPass",
+    "GPUCommandEncoder.prototype.clearBuffer",
+    "GPUCommandEncoder.prototype.copyBufferToBuffer",
+    "GPUCommandEncoder.prototype.copyBufferToTexture",
+    "GPUCommandEncoder.prototype.copyTextureToBuffer",
+    "GPUCommandEncoder.prototype.copyTextureToTexture",
+    "GPUCommandEncoder.prototype.finish",
+    "GPUCommandEncoder.prototype.insertDebugMarker",
+    "GPUCommandEncoder.prototype.label",
+    "GPUCommandEncoder.prototype.popDebugGroup",
+    "GPUCommandEncoder.prototype.pushDebugGroup",
+    "GPUCommandEncoder.prototype.resolveQuerySet",
+    "GPUCommandEncoder.prototype.writeTimestamp",
+    "GPUCompilationInfo",
+    "GPUCompilationInfo.prototype",
+    "GPUCompilationInfo.prototype.messages",
+    "GPUCompilationMessage",
+    "GPUCompilationMessage.prototype",
+    "GPUCompilationMessage.prototype.length",
+    "GPUCompilationMessage.prototype.lineNum",
+    "GPUCompilationMessage.prototype.linePos",
+    "GPUCompilationMessage.prototype.message",
+    "GPUCompilationMessage.prototype.offset",
+    "GPUCompilationMessage.prototype.type",
+    "GPUComputePassEncoder",
+    "GPUComputePassEncoder.prototype",
+    "GPUComputePassEncoder.prototype.dispatchWorkgroups",
+    "GPUComputePassEncoder.prototype.dispatchWorkgroupsIndirect",
+    "GPUComputePassEncoder.prototype.end",
+    "GPUComputePassEncoder.prototype.insertDebugMarker",
+    "GPUComputePassEncoder.prototype.label",
+    "GPUComputePassEncoder.prototype.popDebugGroup",
+    "GPUComputePassEncoder.prototype.pushDebugGroup",
+    "GPUComputePassEncoder.prototype.setBindGroup",
+    "GPUComputePassEncoder.prototype.setPipeline",
+    "GPUComputePassEncoder.prototype.writeTimestamp",
+    "GPUComputePipeline",
+    "GPUComputePipeline.prototype",
+    "GPUComputePipeline.prototype.getBindGroupLayout",
+    "GPUComputePipeline.prototype.label",
+    "GPUDevice",
+    "GPUDevice.prototype",
+    "GPUDevice.prototype.createBindGroup",
+    "GPUDevice.prototype.createBindGroupLayout",
+    "GPUDevice.prototype.createBuffer",
+    "GPUDevice.prototype.createCommandEncoder",
+    "GPUDevice.prototype.createComputePipeline",
+    "GPUDevice.prototype.createComputePipelineAsync",
+    "GPUDevice.prototype.createPipelineLayout",
+    "GPUDevice.prototype.createQuerySet",
+    "GPUDevice.prototype.createRenderBundleEncoder",
+    "GPUDevice.prototype.createRenderPipeline",
+    "GPUDevice.prototype.createRenderPipelineAsync",
+    "GPUDevice.prototype.createSampler",
+    "GPUDevice.prototype.createShaderModule",
+    "GPUDevice.prototype.createTexture",
+    "GPUDevice.prototype.destroy",
+    "GPUDevice.prototype.features",
+    "GPUDevice.prototype.importExternalTexture",
+    "GPUDevice.prototype.label",
+    "GPUDevice.prototype.limits",
+    "GPUDevice.prototype.lost",
+    "GPUDevice.prototype.onuncapturederror",
+    "GPUDevice.prototype.popErrorScope",
+    "GPUDevice.prototype.pushErrorScope",
+    "GPUDevice.prototype.queue",
+    "GPUDeviceLostInfo",
+    "GPUDeviceLostInfo.prototype",
+    "GPUDeviceLostInfo.prototype.message",
+    "GPUDeviceLostInfo.prototype.reason",
+    "GPUError",
+    "GPUError.prototype",
+    "GPUError.prototype.message",
+    "GPUExternalTexture",
+    "GPUExternalTexture.prototype",
+    "GPUExternalTexture.prototype.label",
+    "GPUInternalError",
+    "GPUInternalError.prototype",
+    "GPUMapMode",
+    "GPUOutOfMemoryError",
+    "GPUOutOfMemoryError.prototype",
+    "GPUPipelineError",
+    "GPUPipelineError.prototype",
+    "GPUPipelineError.prototype.reason",
+    "GPUPipelineLayout",
+    "GPUPipelineLayout.prototype",
+    "GPUPipelineLayout.prototype.label",
+    "GPUQuerySet",
+    "GPUQuerySet.prototype",
+    "GPUQuerySet.prototype.count",
+    "GPUQuerySet.prototype.destroy",
+    "GPUQuerySet.prototype.label",
+    "GPUQuerySet.prototype.type",
+    "GPUQueue",
+    "GPUQueue.prototype",
+    "GPUQueue.prototype.copyExternalImageToTexture",
+    "GPUQueue.prototype.label",
+    "GPUQueue.prototype.onSubmittedWorkDone",
+    "GPUQueue.prototype.submit",
+    "GPUQueue.prototype.writeBuffer",
+    "GPUQueue.prototype.writeTexture",
+    "GPURenderBundle",
+    "GPURenderBundle.prototype",
+    "GPURenderBundle.prototype.label",
+    "GPURenderBundleEncoder",
+    "GPURenderBundleEncoder.prototype",
+    "GPURenderBundleEncoder.prototype.draw",
+    "GPURenderBundleEncoder.prototype.drawIndexed",
+    "GPURenderBundleEncoder.prototype.drawIndexedIndirect",
+    "GPURenderBundleEncoder.prototype.drawIndirect",
+    "GPURenderBundleEncoder.prototype.finish",
+    "GPURenderBundleEncoder.prototype.insertDebugMarker",
+    "GPURenderBundleEncoder.prototype.label",
+    "GPURenderBundleEncoder.prototype.popDebugGroup",
+    "GPURenderBundleEncoder.prototype.pushDebugGroup",
+    "GPURenderBundleEncoder.prototype.setBindGroup",
+    "GPURenderBundleEncoder.prototype.setIndexBuffer",
+    "GPURenderBundleEncoder.prototype.setPipeline",
+    "GPURenderBundleEncoder.prototype.setVertexBuffer",
+    "GPURenderPassEncoder",
+    "GPURenderPassEncoder.prototype",
+    "GPURenderPassEncoder.prototype.beginOcclusionQuery",
+    "GPURenderPassEncoder.prototype.draw",
+    "GPURenderPassEncoder.prototype.drawIndexed",
+    "GPURenderPassEncoder.prototype.drawIndexedIndirect",
+    "GPURenderPassEncoder.prototype.drawIndirect",
+    "GPURenderPassEncoder.prototype.end",
+    "GPURenderPassEncoder.prototype.endOcclusionQuery",
+    "GPURenderPassEncoder.prototype.executeBundles",
+    "GPURenderPassEncoder.prototype.insertDebugMarker",
+    "GPURenderPassEncoder.prototype.label",
+    "GPURenderPassEncoder.prototype.popDebugGroup",
+    "GPURenderPassEncoder.prototype.pushDebugGroup",
+    "GPURenderPassEncoder.prototype.setBindGroup",
+    "GPURenderPassEncoder.prototype.setBlendConstant",
+    "GPURenderPassEncoder.prototype.setIndexBuffer",
+    "GPURenderPassEncoder.prototype.setPipeline",
+    "GPURenderPassEncoder.prototype.setScissorRect",
+    "GPURenderPassEncoder.prototype.setStencilReference",
+    "GPURenderPassEncoder.prototype.setVertexBuffer",
+    "GPURenderPassEncoder.prototype.setViewport",
+    "GPURenderPassEncoder.prototype.writeTimestamp",
+    "GPURenderPipeline",
+    "GPURenderPipeline.prototype",
+    "GPURenderPipeline.prototype.getBindGroupLayout",
+    "GPURenderPipeline.prototype.label",
+    "GPUSampler",
+    "GPUSampler.prototype",
+    "GPUSampler.prototype.label",
+    "GPUShaderModule",
+    "GPUShaderModule.prototype",
+    "GPUShaderModule.prototype.getCompilationInfo",
+    "GPUShaderModule.prototype.label",
+    "GPUShaderStage",
+    "GPUSupportedFeatures",
+    "GPUSupportedFeatures.prototype",
+    "GPUSupportedFeatures.prototype.entries",
+    "GPUSupportedFeatures.prototype.forEach",
+    "GPUSupportedFeatures.prototype.has",
+    "GPUSupportedFeatures.prototype.keys",
+    "GPUSupportedFeatures.prototype.size",
+    "GPUSupportedFeatures.prototype.values",
+    "GPUSupportedLimits",
+    "GPUSupportedLimits.prototype",
+    "GPUSupportedLimits.prototype.maxBindGroups",
+    "GPUSupportedLimits.prototype.maxBindingsPerBindGroup",
+    "GPUSupportedLimits.prototype.maxBufferSize",
+    "GPUSupportedLimits.prototype.maxColorAttachmentBytesPerSample",
+    "GPUSupportedLimits.prototype.maxColorAttachments",
+    "GPUSupportedLimits.prototype.maxComputeInvocationsPerWorkgroup",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeX",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeY",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupSizeZ",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupStorageSize",
+    "GPUSupportedLimits.prototype.maxComputeWorkgroupsPerDimension",
+    "GPUSupportedLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout",
+    "GPUSupportedLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout",
+    "GPUSupportedLimits.prototype.maxFragmentCombinedOutputResources",
+    "GPUSupportedLimits.prototype.maxInterStageShaderComponents",
+    "GPUSupportedLimits.prototype.maxInterStageShaderVariables",
+    "GPUSupportedLimits.prototype.maxSampledTexturesPerShaderStage",
+    "GPUSupportedLimits.prototype.maxSamplersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxStorageBufferBindingSize",
+    "GPUSupportedLimits.prototype.maxStorageBuffersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxStorageTexturesPerShaderStage",
+    "GPUSupportedLimits.prototype.maxTextureArrayLayers",
+    "GPUSupportedLimits.prototype.maxTextureDimension1D",
+    "GPUSupportedLimits.prototype.maxTextureDimension2D",
+    "GPUSupportedLimits.prototype.maxTextureDimension3D",
+    "GPUSupportedLimits.prototype.maxUniformBufferBindingSize",
+    "GPUSupportedLimits.prototype.maxUniformBuffersPerShaderStage",
+    "GPUSupportedLimits.prototype.maxVertexAttributes",
+    "GPUSupportedLimits.prototype.maxVertexBufferArrayStride",
+    "GPUSupportedLimits.prototype.maxVertexBuffers",
+    "GPUSupportedLimits.prototype.minStorageBufferOffsetAlignment",
+    "GPUSupportedLimits.prototype.minUniformBufferOffsetAlignment",
+    "GPUTexture",
+    "GPUTexture.prototype",
+    "GPUTexture.prototype.createView",
+    "GPUTexture.prototype.depthOrArrayLayers",
+    "GPUTexture.prototype.destroy",
+    "GPUTexture.prototype.dimension",
+    "GPUTexture.prototype.format",
+    "GPUTexture.prototype.height",
+    "GPUTexture.prototype.label",
+    "GPUTexture.prototype.mipLevelCount",
+    "GPUTexture.prototype.sampleCount",
+    "GPUTexture.prototype.usage",
+    "GPUTexture.prototype.width",
+    "GPUTextureUsage",
+    "GPUTextureView",
+    "GPUTextureView.prototype",
+    "GPUTextureView.prototype.label",
+    "GPUUncapturedErrorEvent",
+    "GPUUncapturedErrorEvent.prototype",
+    "GPUUncapturedErrorEvent.prototype.error",
+    "GPUValidationError",
+    "GPUValidationError.prototype",
     "GainNode",
     "GainNode.prototype",
     "GainNode.prototype.gain",
@@ -3159,6 +3424,7 @@
     "Navigator.prototype.getGamepads",
     "Navigator.prototype.getInstalledRelatedApps",
     "Navigator.prototype.getUserMedia",
+    "Navigator.prototype.gpu",
     "Navigator.prototype.hardwareConcurrency",
     "Navigator.prototype.hid",
     "Navigator.prototype.ink",
```

  
#### 113.0.5638.0 (`2023-3-9`) ⚡
Added 1 APIs, removed 4 (see: [diff](./browser_apis/chrome-unstable_112.0.5615.20_to_113.0.5638.0.diff), [json](./browser_apis/chrome-unstable_112.0.5615.20_to_113.0.5638.0.json), [full list](./browser_apis/chrome-unstable_113.0.5638.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_112.0.5615.20.json	2023-04-13 09:09:57.531179757 +0000
+++ ./browser_apis/chrome-unstable_113.0.5638.0.json	2023-04-13 09:10:18.355267823 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7720,
+  "browserApiCount": 7717,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -720,8 +720,6 @@
     "CanvasCaptureMediaStreamTrack.prototype",
     "CanvasCaptureMediaStreamTrack.prototype.canvas",
     "CanvasCaptureMediaStreamTrack.prototype.requestFrame",
-    "CanvasFilter",
-    "CanvasFilter.prototype",
     "CanvasGradient",
     "CanvasGradient.prototype",
     "CanvasGradient.prototype.addColorStop",
@@ -3760,8 +3758,6 @@
     "OverconstrainedError",
     "OverconstrainedError.prototype",
     "OverconstrainedError.prototype.constraint",
-    "OverconstrainedError.prototype.message",
-    "OverconstrainedError.prototype.name",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -5902,6 +5898,7 @@
     "URLSearchParams.prototype.has",
     "URLSearchParams.prototype.keys",
     "URLSearchParams.prototype.set",
+    "URLSearchParams.prototype.size",
     "URLSearchParams.prototype.sort",
     "URLSearchParams.prototype.toString",
     "URLSearchParams.prototype.values",
```

  
#### 112.0.5615.20 (`2023-3-8`) 
No browser API changes.

  
#### 112.0.5615.12 (`2023-3-2`) 
No browser API changes.

  
#### 112.0.5596.2 (`2023-2-17`) ⚡
Added 0 APIs, removed 60 (see: [diff](./browser_apis/chrome-unstable_112.0.5582.0_to_112.0.5596.2.diff), [json](./browser_apis/chrome-unstable_112.0.5582.0_to_112.0.5596.2.json), [full list](./browser_apis/chrome-unstable_112.0.5596.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_112.0.5582.0.json	2023-02-18 01:07:05.953468938 +0000
+++ ./browser_apis/chrome-unstable_112.0.5596.2.json	2023-02-18 01:07:35.941350090 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 7780,
+  "browserApiCount": 7720,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -414,20 +414,6 @@
     "ByteLengthQueuingStrategy.prototype.size",
     "CDATASection",
     "CDATASection.prototype",
-    "CSPViolationReportBody",
-    "CSPViolationReportBody.prototype",
-    "CSPViolationReportBody.prototype.blockedURL",
-    "CSPViolationReportBody.prototype.columnNumber",
-    "CSPViolationReportBody.prototype.disposition",
-    "CSPViolationReportBody.prototype.documentURL",
-    "CSPViolationReportBody.prototype.effectiveDirective",
-    "CSPViolationReportBody.prototype.lineNumber",
-    "CSPViolationReportBody.prototype.originalPolicy",
-    "CSPViolationReportBody.prototype.referrer",
-    "CSPViolationReportBody.prototype.sample",
-    "CSPViolationReportBody.prototype.sourceFile",
-    "CSPViolationReportBody.prototype.statusCode",
-    "CSPViolationReportBody.prototype.toJSON",
     "CSS",
     "CSS.Hz",
     "CSS.Q",
@@ -877,17 +863,6 @@
     "CookieStoreManager.prototype.getSubscriptions",
     "CookieStoreManager.prototype.subscribe",
     "CookieStoreManager.prototype.unsubscribe",
-    "CoopAccessViolationReportBody",
-    "CoopAccessViolationReportBody.prototype",
-    "CoopAccessViolationReportBody.prototype.columnNumber",
-    "CoopAccessViolationReportBody.prototype.lineNumber",
-    "CoopAccessViolationReportBody.prototype.openeeURL",
-    "CoopAccessViolationReportBody.prototype.openerURL",
-    "CoopAccessViolationReportBody.prototype.otherDocumentURL",
-    "CoopAccessViolationReportBody.prototype.property",
-    "CoopAccessViolationReportBody.prototype.sourceFile",
-    "CoopAccessViolationReportBody.prototype.toJSON",
-    "CoopAccessViolationReportBody.prototype.type",
     "CountQueuingStrategy",
     "CountQueuingStrategy.prototype",
     "CountQueuingStrategy.prototype.highWaterMark",
@@ -1130,15 +1105,6 @@
     "DelegatedInkTrailPresenter.prototype.expectedImprovement",
     "DelegatedInkTrailPresenter.prototype.presentationArea",
     "DelegatedInkTrailPresenter.prototype.updateInkTrailStartPoint",
-    "DeprecationReportBody",
-    "DeprecationReportBody.prototype",
-    "DeprecationReportBody.prototype.anticipatedRemoval",
-    "DeprecationReportBody.prototype.columnNumber",
-    "DeprecationReportBody.prototype.id",
-    "DeprecationReportBody.prototype.lineNumber",
-    "DeprecationReportBody.prototype.message",
-    "DeprecationReportBody.prototype.sourceFile",
-    "DeprecationReportBody.prototype.toJSON",
     "DeviceMotionEvent",
     "DeviceMotionEvent.prototype",
     "DeviceMotionEvent.prototype.acceleration",
@@ -1161,15 +1127,6 @@
     "DeviceOrientationEvent.prototype.alpha",
     "DeviceOrientationEvent.prototype.beta",
     "DeviceOrientationEvent.prototype.gamma",
-    "DocumentPolicyViolationReportBody",
-    "DocumentPolicyViolationReportBody.prototype",
-    "DocumentPolicyViolationReportBody.prototype.columnNumber",
-    "DocumentPolicyViolationReportBody.prototype.disposition",
-    "DocumentPolicyViolationReportBody.prototype.featureId",
-    "DocumentPolicyViolationReportBody.prototype.lineNumber",
-    "DocumentPolicyViolationReportBody.prototype.message",
-    "DocumentPolicyViolationReportBody.prototype.sourceFile",
-    "DocumentPolicyViolationReportBody.prototype.toJSON",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
     "DocumentType",
@@ -2529,14 +2486,6 @@
     "IntersectionObserverEntry.prototype.rootBounds",
     "IntersectionObserverEntry.prototype.target",
     "IntersectionObserverEntry.prototype.time",
-    "InterventionReportBody",
-    "InterventionReportBody.prototype",
-    "InterventionReportBody.prototype.columnNumber",
-    "InterventionReportBody.prototype.id",
-    "InterventionReportBody.prototype.lineNumber",
-    "InterventionReportBody.prototype.message",
-    "InterventionReportBody.prototype.sourceFile",
-    "InterventionReportBody.prototype.toJSON",
     "Intl",
     "Intl.Collator",
     "Intl.Collator.prototype",
@@ -4502,15 +4451,6 @@
     "RemotePlayback.prototype.prompt",
     "RemotePlayback.prototype.state",
     "RemotePlayback.prototype.watchAvailability",
-    "Report",
-    "Report.prototype",
-    "Report.prototype.body",
-    "Report.prototype.toJSON",
-    "Report.prototype.type",
-    "Report.prototype.url",
-    "ReportBody",
-    "ReportBody.prototype",
-    "ReportBody.prototype.toJSON",
     "ReportingObserver",
     "ReportingObserver.prototype",
     "ReportingObserver.prototype.disconnect",
```

  <!-- browserapis:end -->
