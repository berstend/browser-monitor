# WIP

## Browser APIs

<!-- browserapis:start -->
### chrome-stable
  
#### 122.0.6261.94 (`2024-2-27`) 
No browser API changes.

  
#### 122.0.6261.69 (`2024-2-22`) 
No browser API changes.

  
#### 122.0.6261.57 (`2024-2-20`) ⚡
Added 55 APIs, removed 8 (see: [diff](./browser_apis/chrome-stable_121.0.6167.184_to_122.0.6261.57.diff), [json](./browser_apis/chrome-stable_121.0.6167.184_to_122.0.6261.57.json), [full list](./browser_apis/chrome-stable_122.0.6261.57.json))
 ```diff
--- ./browser_apis/chrome-stable_121.0.6167.184.json	2024-02-21 00:54:01.693221434 +0000
+++ ./browser_apis/chrome-stable_122.0.6261.57.json	2024-02-21 00:54:31.545434011 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8161,
+  "browserApiCount": 8208,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2039,6 +2039,7 @@
     "HTMLHtmlElement.prototype.version",
     "HTMLIFrameElement",
     "HTMLIFrameElement.prototype",
+    "HTMLIFrameElement.prototype.adAuctionHeaders",
     "HTMLIFrameElement.prototype.align",
     "HTMLIFrameElement.prototype.allow",
     "HTMLIFrameElement.prototype.allowFullscreen",
@@ -2431,7 +2432,6 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
-    "HTMLTemplateElement.prototype.shadowRoot",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
@@ -2675,6 +2675,7 @@
     "IIRFilterNode.prototype",
     "IIRFilterNode.prototype.getFrequencyResponse",
     "IdentityCredential",
+    "IdentityCredential.disconnect",
     "IdentityCredential.prototype",
     "IdentityCredential.prototype.isAutoSelected",
     "IdentityCredential.prototype.token",
@@ -2904,6 +2905,21 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
+    "Iterator",
+    "Iterator.from",
+    "Iterator.prototype",
+    "Iterator.prototype.constructor",
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
@@ -3542,6 +3558,7 @@
     "Navigator.prototype.serviceWorker",
     "Navigator.prototype.setAppBadge",
     "Navigator.prototype.storage",
+    "Navigator.prototype.storageBuckets",
     "Navigator.prototype.unregisterProtocolHandler",
     "Navigator.prototype.usb",
     "Navigator.prototype.userActivation",
@@ -4178,10 +4195,8 @@
     "PaymentManager.prototype.userHint",
     "PaymentMethodChangeEvent",
     "PaymentMethodChangeEvent.prototype",
-    "PaymentMethodChangeEvent.prototype.constructor",
     "PaymentMethodChangeEvent.prototype.methodDetails",
     "PaymentMethodChangeEvent.prototype.methodName",
-    "PaymentMethodChangeEvent.prototype.updateWith",
     "PaymentRequest",
     "PaymentRequest.prototype",
     "PaymentRequest.prototype.abort",
@@ -4195,6 +4210,9 @@
     "PaymentRequest.prototype.shippingOption",
     "PaymentRequest.prototype.shippingType",
     "PaymentRequest.prototype.show",
+    "PaymentRequestUpdateEvent",
+    "PaymentRequestUpdateEvent.prototype",
+    "PaymentRequestUpdateEvent.prototype.updateWith",
     "PaymentResponse",
     "PaymentResponse.prototype",
     "PaymentResponse.prototype.complete",
@@ -5812,10 +5830,17 @@
     "Set.prototype.add",
     "Set.prototype.clear",
     "Set.prototype.delete",
+    "Set.prototype.difference",
     "Set.prototype.entries",
     "Set.prototype.forEach",
     "Set.prototype.has",
+    "Set.prototype.intersection",
+    "Set.prototype.isDisjointFrom",
+    "Set.prototype.isSubsetOf",
+    "Set.prototype.isSupersetOf",
     "Set.prototype.size",
+    "Set.prototype.symmetricDifference",
+    "Set.prototype.union",
     "Set.prototype.values",
     "ShadowRoot",
     "ShadowRoot.prototype",
@@ -5934,6 +5959,22 @@
     "Storage.prototype.length",
     "Storage.prototype.removeItem",
     "Storage.prototype.setItem",
+    "StorageBucket",
+    "StorageBucket.prototype",
+    "StorageBucket.prototype.caches",
+    "StorageBucket.prototype.estimate",
+    "StorageBucket.prototype.expires",
+    "StorageBucket.prototype.getDirectory",
+    "StorageBucket.prototype.indexedDB",
+    "StorageBucket.prototype.name",
+    "StorageBucket.prototype.persist",
+    "StorageBucket.prototype.persisted",
+    "StorageBucket.prototype.setExpires",
+    "StorageBucketManager",
+    "StorageBucketManager.prototype",
+    "StorageBucketManager.prototype.delete",
+    "StorageBucketManager.prototype.keys",
+    "StorageBucketManager.prototype.open",
     "StorageEvent",
     "StorageEvent.prototype",
     "StorageEvent.prototype.initStorageEvent",
@@ -6062,15 +6103,10 @@
     "SyntaxError.prototype",
     "TaskAttributionTiming",
     "TaskAttributionTiming.prototype",
-    "TaskAttributionTiming.prototype.constructor",
     "TaskAttributionTiming.prototype.containerId",
     "TaskAttributionTiming.prototype.containerName",
     "TaskAttributionTiming.prototype.containerSrc",
     "TaskAttributionTiming.prototype.containerType",
-    "TaskAttributionTiming.prototype.duration",
-    "TaskAttributionTiming.prototype.entryType",
-    "TaskAttributionTiming.prototype.name",
-    "TaskAttributionTiming.prototype.startTime",
     "TaskAttributionTiming.prototype.toJSON",
     "TaskController",
     "TaskController.prototype",
@@ -6295,6 +6331,7 @@
     "URLPattern",
     "URLPattern.prototype",
     "URLPattern.prototype.exec",
+    "URLPattern.prototype.hasRegExpGroups",
     "URLPattern.prototype.hash",
     "URLPattern.prototype.hostname",
     "URLPattern.prototype.password",
@@ -6563,6 +6600,12 @@
     "VirtualKeyboardGeometryChangeEvent.prototype",
     "VisibilityStateEntry",
     "VisibilityStateEntry.prototype",
+    "VisibilityStateEntry.prototype.constructor",
+    "VisibilityStateEntry.prototype.duration",
+    "VisibilityStateEntry.prototype.entryType",
+    "VisibilityStateEntry.prototype.name",
+    "VisibilityStateEntry.prototype.startTime",
+    "VisibilityStateEntry.prototype.toJSON",
     "VisualViewport",
     "VisualViewport.prototype",
     "VisualViewport.prototype.height",
@@ -6739,7 +6782,9 @@
     "WebGL2RenderingContext.prototype.drawElementsInstanced",
     "WebGL2RenderingContext.prototype.drawRangeElements",
     "WebGL2RenderingContext.prototype.drawingBufferColorSpace",
+    "WebGL2RenderingContext.prototype.drawingBufferFormat",
     "WebGL2RenderingContext.prototype.drawingBufferHeight",
+    "WebGL2RenderingContext.prototype.drawingBufferStorage",
     "WebGL2RenderingContext.prototype.drawingBufferWidth",
     "WebGL2RenderingContext.prototype.enable",
     "WebGL2RenderingContext.prototype.enableVertexAttribArray",
@@ -6959,7 +7004,9 @@
     "WebGLRenderingContext.prototype.drawArrays",
     "WebGLRenderingContext.prototype.drawElements",
     "WebGLRenderingContext.prototype.drawingBufferColorSpace",
+    "WebGLRenderingContext.prototype.drawingBufferFormat",
     "WebGLRenderingContext.prototype.drawingBufferHeight",
+    "WebGLRenderingContext.prototype.drawingBufferStorage",
     "WebGLRenderingContext.prototype.drawingBufferWidth",
     "WebGLRenderingContext.prototype.enable",
     "WebGLRenderingContext.prototype.enableVertexAttribArray",
```

  
#### 121.0.6167.184 (`2024-2-13`) 
No browser API changes.

  
#### 121.0.6167.160 (`2024-2-6`) 
No browser API changes.

  
#### 121.0.6167.139 (`2024-1-30`) 
No browser API changes.

  
#### 121.0.6167.85 (`2024-1-23`) ⚡
Added 90 APIs, removed 38 (see: [diff](./browser_apis/chrome-stable_120.0.6099.224_to_121.0.6167.85.diff), [json](./browser_apis/chrome-stable_120.0.6099.224_to_121.0.6167.85.json), [full list](./browser_apis/chrome-stable_121.0.6167.85.json))
 ```diff
--- ./browser_apis/chrome-stable_120.0.6099.224.json	2024-01-24 00:58:50.535795082 +0000
+++ ./browser_apis/chrome-stable_121.0.6167.85.json	2024-01-24 00:59:18.467655459 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8109,
+  "browserApiCount": 8161,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -34,32 +34,6 @@
     "AnalyserNode.prototype.maxDecibels",
     "AnalyserNode.prototype.minDecibels",
     "AnalyserNode.prototype.smoothingTimeConstant",
-    "Animation",
-    "Animation.prototype",
-    "Animation.prototype.cancel",
-    "Animation.prototype.commitStyles",
-    "Animation.prototype.currentTime",
-    "Animation.prototype.effect",
-    "Animation.prototype.finish",
-    "Animation.prototype.finished",
-    "Animation.prototype.id",
-    "Animation.prototype.oncancel",
-    "Animation.prototype.onfinish",
-    "Animation.prototype.onremove",
-    "Animation.prototype.pause",
-    "Animation.prototype.pending",
-    "Animation.prototype.persist",
-    "Animation.prototype.play",
-    "Animation.prototype.playState",
-    "Animation.prototype.playbackRate",
-    "Animation.prototype.rangeEnd",
-    "Animation.prototype.rangeStart",
-    "Animation.prototype.ready",
-    "Animation.prototype.replaceState",
-    "Animation.prototype.reverse",
-    "Animation.prototype.startTime",
-    "Animation.prototype.timeline",
-    "Animation.prototype.updatePlaybackRate",
     "AnimationEvent",
     "AnimationEvent.prototype",
     "AnimationEvent.prototype.animationName",
@@ -69,12 +43,9 @@
     "AnimationPlaybackEvent.prototype",
     "AnimationPlaybackEvent.prototype.currentTime",
     "AnimationPlaybackEvent.prototype.timelineTime",
-    "AnimationTimeline",
-    "AnimationTimeline.prototype",
-    "AnimationTimeline.prototype.currentTime",
-    "AnimationTimeline.prototype.duration",
     "Array",
     "Array.from",
+    "Array.fromAsync",
     "Array.isArray",
     "Array.of",
     "Array.prototype",
@@ -527,6 +498,7 @@
     "CSSImportRule.prototype.layerName",
     "CSSImportRule.prototype.media",
     "CSSImportRule.prototype.styleSheet",
+    "CSSImportRule.prototype.supportsText",
     "CSSKeyframeRule",
     "CSSKeyframeRule.prototype",
     "CSSKeyframeRule.prototype.keyText",
@@ -684,7 +656,32 @@
     "CSSTransformValue.prototype.toMatrix",
     "CSSTransition",
     "CSSTransition.prototype",
+    "CSSTransition.prototype.cancel",
+    "CSSTransition.prototype.commitStyles",
+    "CSSTransition.prototype.constructor",
+    "CSSTransition.prototype.currentTime",
+    "CSSTransition.prototype.effect",
+    "CSSTransition.prototype.finish",
+    "CSSTransition.prototype.finished",
+    "CSSTransition.prototype.id",
+    "CSSTransition.prototype.oncancel",
+    "CSSTransition.prototype.onfinish",
+    "CSSTransition.prototype.onremove",
+    "CSSTransition.prototype.pause",
+    "CSSTransition.prototype.pending",
+    "CSSTransition.prototype.persist",
+    "CSSTransition.prototype.play",
+    "CSSTransition.prototype.playState",
+    "CSSTransition.prototype.playbackRate",
+    "CSSTransition.prototype.rangeEnd",
+    "CSSTransition.prototype.rangeStart",
+    "CSSTransition.prototype.ready",
+    "CSSTransition.prototype.replaceState",
+    "CSSTransition.prototype.reverse",
+    "CSSTransition.prototype.startTime",
+    "CSSTransition.prototype.timeline",
     "CSSTransition.prototype.transitionProperty",
+    "CSSTransition.prototype.updatePlaybackRate",
     "CSSTranslate",
     "CSSTranslate.prototype",
     "CSSTranslate.prototype.constructor",
@@ -828,6 +825,10 @@
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
     "ChannelSplitterNode.prototype",
+    "CharacterBoundsUpdateEvent",
+    "CharacterBoundsUpdateEvent.prototype",
+    "CharacterBoundsUpdateEvent.prototype.rangeEnd",
+    "CharacterBoundsUpdateEvent.prototype.rangeStart",
     "Clipboard",
     "Clipboard.prototype",
     "Clipboard.prototype.read",
@@ -841,18 +842,12 @@
     "ClipboardItem.prototype",
     "ClipboardItem.prototype.getType",
     "ClipboardItem.prototype.types",
+    "ClipboardItem.supports",
     "CloseEvent",
     "CloseEvent.prototype",
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
-    "CloseWatcher",
-    "CloseWatcher.prototype",
-    "CloseWatcher.prototype.close",
-    "CloseWatcher.prototype.destroy",
-    "CloseWatcher.prototype.oncancel",
-    "CloseWatcher.prototype.onclose",
-    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -1164,6 +1159,9 @@
     "DocumentPictureInPictureEvent.prototype.window",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
+    "DocumentTimeline.prototype.constructor",
+    "DocumentTimeline.prototype.currentTime",
+    "DocumentTimeline.prototype.duration",
     "DocumentType",
     "DocumentType.prototype",
     "DocumentType.prototype.after",
@@ -1184,6 +1182,24 @@
     "DynamicsCompressorNode.prototype.reduction",
     "DynamicsCompressorNode.prototype.release",
     "DynamicsCompressorNode.prototype.threshold",
+    "EditContext",
+    "EditContext.prototype",
+    "EditContext.prototype.attachedElements",
+    "EditContext.prototype.characterBounds",
+    "EditContext.prototype.characterBoundsRangeStart",
+    "EditContext.prototype.oncharacterboundsupdate",
+    "EditContext.prototype.oncompositionend",
+    "EditContext.prototype.oncompositionstart",
+    "EditContext.prototype.ontextformatupdate",
+    "EditContext.prototype.ontextupdate",
+    "EditContext.prototype.selectionEnd",
+    "EditContext.prototype.selectionStart",
+    "EditContext.prototype.text",
+    "EditContext.prototype.updateCharacterBounds",
+    "EditContext.prototype.updateControlBounds",
+    "EditContext.prototype.updateSelection",
+    "EditContext.prototype.updateSelectionBounds",
+    "EditContext.prototype.updateText",
     "ElementInternals",
     "ElementInternals.prototype",
     "ElementInternals.prototype.ariaAtomic",
@@ -1359,6 +1375,7 @@
     "FileSystemFileHandle.prototype.move",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
+    "FileSystemWritableFileStream.prototype.mode",
     "FileSystemWritableFileStream.prototype.seek",
     "FileSystemWritableFileStream.prototype.truncate",
     "FileSystemWritableFileStream.prototype.write",
@@ -1477,7 +1494,6 @@
     "GPUCommandEncoder.prototype.popDebugGroup",
     "GPUCommandEncoder.prototype.pushDebugGroup",
     "GPUCommandEncoder.prototype.resolveQuerySet",
-    "GPUCommandEncoder.prototype.writeTimestamp",
     "GPUCompilationInfo",
     "GPUCompilationInfo.prototype",
     "GPUCompilationInfo.prototype.messages",
@@ -2307,6 +2323,7 @@
     "HTMLSelectElement.prototype.selectedIndex",
     "HTMLSelectElement.prototype.selectedOptions",
     "HTMLSelectElement.prototype.setCustomValidity",
+    "HTMLSelectElement.prototype.showPicker",
     "HTMLSelectElement.prototype.size",
     "HTMLSelectElement.prototype.type",
     "HTMLSelectElement.prototype.validationMessage",
@@ -3884,6 +3901,7 @@
     "Option.prototype.constructor.prototype.dataset",
     "Option.prototype.constructor.prototype.dir",
     "Option.prototype.constructor.prototype.draggable",
+    "Option.prototype.constructor.prototype.editContext",
     "Option.prototype.constructor.prototype.elementTiming",
     "Option.prototype.constructor.prototype.enterKeyHint",
     "Option.prototype.constructor.prototype.firstElementChild",
@@ -5855,6 +5873,17 @@
     "SourceBufferList.prototype.length",
     "SourceBufferList.prototype.onaddsourcebuffer",
     "SourceBufferList.prototype.onremovesourcebuffer",
+    "SpeechSynthesis",
+    "SpeechSynthesis.prototype",
+    "SpeechSynthesis.prototype.cancel",
+    "SpeechSynthesis.prototype.getVoices",
+    "SpeechSynthesis.prototype.onvoiceschanged",
+    "SpeechSynthesis.prototype.pause",
+    "SpeechSynthesis.prototype.paused",
+    "SpeechSynthesis.prototype.pending",
+    "SpeechSynthesis.prototype.resume",
+    "SpeechSynthesis.prototype.speak",
+    "SpeechSynthesis.prototype.speaking",
     "SpeechSynthesisErrorEvent",
     "SpeechSynthesisErrorEvent.prototype",
     "SpeechSynthesisErrorEvent.prototype.charIndex",
@@ -5879,6 +5908,13 @@
     "SpeechSynthesisUtterance.prototype.text",
     "SpeechSynthesisUtterance.prototype.voice",
     "SpeechSynthesisUtterance.prototype.volume",
+    "SpeechSynthesisVoice",
+    "SpeechSynthesisVoice.prototype",
+    "SpeechSynthesisVoice.prototype.default",
+    "SpeechSynthesisVoice.prototype.lang",
+    "SpeechSynthesisVoice.prototype.localService",
+    "SpeechSynthesisVoice.prototype.name",
+    "SpeechSynthesisVoice.prototype.voiceURI",
     "StaticRange",
     "StaticRange.prototype",
     "StaticRange.prototype.collapsed",
@@ -6104,6 +6140,15 @@
     "TextEvent.prototype",
     "TextEvent.prototype.data",
     "TextEvent.prototype.initTextEvent",
+    "TextFormat",
+    "TextFormat.prototype",
+    "TextFormat.prototype.rangeEnd",
+    "TextFormat.prototype.rangeStart",
+    "TextFormat.prototype.underlineStyle",
+    "TextFormat.prototype.underlineThickness",
+    "TextFormatUpdateEvent",
+    "TextFormatUpdateEvent.prototype",
+    "TextFormatUpdateEvent.prototype.getTextFormats",
     "TextMetrics",
     "TextMetrics.prototype",
     "TextMetrics.prototype.actualBoundingBoxAscent",
@@ -6139,6 +6184,13 @@
     "TextTrackList.prototype.onaddtrack",
     "TextTrackList.prototype.onchange",
     "TextTrackList.prototype.onremovetrack",
+    "TextUpdateEvent",
+    "TextUpdateEvent.prototype",
+    "TextUpdateEvent.prototype.selectionEnd",
+    "TextUpdateEvent.prototype.selectionStart",
+    "TextUpdateEvent.prototype.text",
+    "TextUpdateEvent.prototype.updateRangeEnd",
+    "TextUpdateEvent.prototype.updateRangeStart",
     "TimeRanges",
     "TimeRanges.prototype",
     "TimeRanges.prototype.end",
```

  
#### 120.0.6099.224 (`2024-1-16`) 
No browser API changes.

  
#### 120.0.6099.216 (`2024-1-9`) 
No browser API changes.

  
#### 120.0.6099.199 (`2024-1-3`) 
No browser API changes.

  
#### 120.0.6099.129 (`2023-12-20`) 
No browser API changes.

  
#### 120.0.6099.109 (`2023-12-12`) 
No browser API changes.

  
#### 120.0.6099.71 (`2023-12-6`) 
No browser API changes.

  
#### 120.0.6099.62 (`2023-12-5`) ⚡
Added 28 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_119.0.6045.199_to_120.0.6099.62.diff), [json](./browser_apis/chrome-stable_119.0.6045.199_to_120.0.6099.62.json), [full list](./browser_apis/chrome-stable_120.0.6099.62.json))
 ```diff
--- ./browser_apis/chrome-stable_119.0.6045.199.json	2023-12-06 00:57:33.070155123 +0000
+++ ./browser_apis/chrome-stable_120.0.6099.62.json	2023-12-06 00:57:51.038185011 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8081,
+  "browserApiCount": 8109,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -846,6 +846,13 @@
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
+    "CloseWatcher",
+    "CloseWatcher.prototype",
+    "CloseWatcher.prototype.close",
+    "CloseWatcher.prototype.destroy",
+    "CloseWatcher.prototype.oncancel",
+    "CloseWatcher.prototype.onclose",
+    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -1623,6 +1630,7 @@
     "GPUSupportedLimits",
     "GPUSupportedLimits.prototype",
     "GPUSupportedLimits.prototype.maxBindGroups",
+    "GPUSupportedLimits.prototype.maxBindGroupsPlusVertexBuffers",
     "GPUSupportedLimits.prototype.maxBindingsPerBindGroup",
     "GPUSupportedLimits.prototype.maxBufferSize",
     "GPUSupportedLimits.prototype.maxColorAttachmentBytesPerSample",
@@ -1893,6 +1901,7 @@
     "HTMLDataListElement.prototype.options",
     "HTMLDetailsElement",
     "HTMLDetailsElement.prototype",
+    "HTMLDetailsElement.prototype.name",
     "HTMLDetailsElement.prototype.open",
     "HTMLDialogElement",
     "HTMLDialogElement.prototype",
@@ -2650,8 +2659,14 @@
     "IIRFilterNode.prototype.getFrequencyResponse",
     "IdentityCredential",
     "IdentityCredential.prototype",
+    "IdentityCredential.prototype.isAutoSelected",
     "IdentityCredential.prototype.token",
+    "IdentityCredentialError",
+    "IdentityCredentialError.prototype",
+    "IdentityCredentialError.prototype.code",
+    "IdentityCredentialError.prototype.url",
     "IdentityProvider",
+    "IdentityProvider.close",
     "IdentityProvider.getUserInfo",
     "IdentityProvider.prototype",
     "IdleDeadline",
@@ -2774,6 +2789,7 @@
     "IntersectionObserver.prototype.observe",
     "IntersectionObserver.prototype.root",
     "IntersectionObserver.prototype.rootMargin",
+    "IntersectionObserver.prototype.scrollMargin",
     "IntersectionObserver.prototype.takeRecords",
     "IntersectionObserver.prototype.thresholds",
     "IntersectionObserver.prototype.trackVisibility",
@@ -3323,11 +3339,18 @@
     "MediaStreamTrackGenerator.prototype.onmute",
     "MediaStreamTrackGenerator.prototype.onunmute",
     "MediaStreamTrackGenerator.prototype.readyState",
+    "MediaStreamTrackGenerator.prototype.stats",
     "MediaStreamTrackGenerator.prototype.stop",
     "MediaStreamTrackGenerator.prototype.writable",
     "MediaStreamTrackProcessor",
     "MediaStreamTrackProcessor.prototype",
     "MediaStreamTrackProcessor.prototype.readable",
+    "MediaStreamTrackVideoStats",
+    "MediaStreamTrackVideoStats.prototype",
+    "MediaStreamTrackVideoStats.prototype.deliveredFrames",
+    "MediaStreamTrackVideoStats.prototype.discardedFrames",
+    "MediaStreamTrackVideoStats.prototype.toJSON",
+    "MediaStreamTrackVideoStats.prototype.totalFrames",
     "MessageChannel",
     "MessageChannel.prototype",
     "MessageChannel.prototype.port1",
@@ -3478,6 +3501,7 @@
     "Navigator.prototype.language",
     "Navigator.prototype.languages",
     "Navigator.prototype.locks",
+    "Navigator.prototype.login",
     "Navigator.prototype.managed",
     "Navigator.prototype.maxTouchPoints",
     "Navigator.prototype.mediaCapabilities",
@@ -3517,6 +3541,9 @@
     "Navigator.prototype.webkitTemporaryStorage",
     "Navigator.prototype.windowControlsOverlay",
     "Navigator.prototype.xr",
+    "NavigatorLogin",
+    "NavigatorLogin.prototype",
+    "NavigatorLogin.prototype.setStatus",
     "NavigatorManagedData",
     "NavigatorManagedData.prototype",
     "NavigatorManagedData.prototype.getManagedConfiguration",
@@ -8065,6 +8092,7 @@
     "webkitSpeechRecognitionEvent.prototype.resultIndex",
     "webkitSpeechRecognitionEvent.prototype.results",
     "webkitURL",
+    "webkitURL.canParse",
     "webkitURL.createObjectURL",
     "webkitURL.prototype",
     "webkitURL.prototype.hash",
```

  
#### 119.0.6045.199 (`2023-11-28`) 
No browser API changes.

  
#### 119.0.6045.159 (`2023-11-14`) 
No browser API changes.

  
#### 119.0.6045.123 (`2023-11-7`) 
No browser API changes.

  
#### 119.0.6045.105 (`2023-10-31`) ⚡
Added 5 APIs, removed 20 (see: [diff](./browser_apis/chrome-stable_118.0.5993.117_to_119.0.6045.105.diff), [json](./browser_apis/chrome-stable_118.0.5993.117_to_119.0.6045.105.json), [full list](./browser_apis/chrome-stable_119.0.6045.105.json))
 ```diff
--- ./browser_apis/chrome-stable_118.0.5993.117.json	2023-11-01 00:57:15.461347865 +0000
+++ ./browser_apis/chrome-stable_119.0.6045.105.json	2023-11-01 00:57:58.773619831 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8096,
+  "browserApiCount": 8081,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2871,20 +2871,6 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
-    "Iterator",
-    "Iterator.from",
-    "Iterator.prototype",
-    "Iterator.prototype.drop",
-    "Iterator.prototype.every",
-    "Iterator.prototype.filter",
-    "Iterator.prototype.find",
-    "Iterator.prototype.flatMap",
-    "Iterator.prototype.forEach",
-    "Iterator.prototype.map",
-    "Iterator.prototype.reduce",
-    "Iterator.prototype.some",
-    "Iterator.prototype.take",
-    "Iterator.prototype.toArray",
     "JSON",
     "JSON.isRawJSON",
     "JSON.parse",
@@ -4052,7 +4038,6 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
-    "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.showPopover",
@@ -4439,6 +4424,7 @@
     "Promise.race",
     "Promise.reject",
     "Promise.resolve",
+    "Promise.withResolvers",
     "PromiseRejectionEvent",
     "PromiseRejectionEvent.prototype",
     "PromiseRejectionEvent.prototype.promise",
@@ -4925,6 +4911,7 @@
     "SVGClipPathElement",
     "SVGClipPathElement.prototype",
     "SVGClipPathElement.prototype.clipPathUnits",
+    "SVGClipPathElement.prototype.transform",
     "SVGDefsElement",
     "SVGDefsElement.prototype",
     "SVGDescElement",
@@ -5626,10 +5613,6 @@
     "SVGViewElement.prototype.viewBox",
     "SVGViewElement.prototype.viewportElement",
     "SVGViewElement.prototype.zoomAndPan",
-    "Sanitizer",
-    "Sanitizer.getDefaultConfiguration",
-    "Sanitizer.prototype",
-    "Sanitizer.prototype.getConfiguration",
     "Scheduler",
     "Scheduler.prototype",
     "Scheduler.prototype.postTask",
@@ -7289,6 +7272,7 @@
     "XMLDocument.prototype.hasFocus",
     "XMLDocument.prototype.hasPrivateToken",
     "XMLDocument.prototype.hasRedemptionRecord",
+    "XMLDocument.prototype.hasStorageAccess",
     "XMLDocument.prototype.head",
     "XMLDocument.prototype.hidden",
     "XMLDocument.prototype.images",
@@ -7430,6 +7414,8 @@
     "XMLDocument.prototype.referrer",
     "XMLDocument.prototype.releaseEvents",
     "XMLDocument.prototype.replaceChildren",
+    "XMLDocument.prototype.requestStorageAccess",
+    "XMLDocument.prototype.requestStorageAccessFor",
     "XMLDocument.prototype.rootElement",
     "XMLDocument.prototype.scripts",
     "XMLDocument.prototype.scrollingElement",
@@ -7921,7 +7907,6 @@
     "onwebkittransitionend",
     "onwheel",
     "open",
-    "openDatabase",
     "opener",
     "origin",
     "originAgentCluster",
```

  
#### 118.0.5993.117 (`2023-10-24`) 
No browser API changes.

  
#### 118.0.5993.88 (`2023-10-17`) 
No browser API changes.

  
#### 118.0.5993.70 (`2023-10-10`) ⚡
Added 19 APIs, removed 0 (see: [diff](./browser_apis/chrome-stable_117.0.5938.149_to_118.0.5993.70.diff), [json](./browser_apis/chrome-stable_117.0.5938.149_to_118.0.5993.70.json), [full list](./browser_apis/chrome-stable_118.0.5993.70.json))
 ```diff
--- ./browser_apis/chrome-stable_117.0.5938.149.json	2023-10-11 00:53:24.445651698 +0000
+++ ./browser_apis/chrome-stable_118.0.5993.70.json	2023-10-11 00:54:05.722112302 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-stable",
-  "browserApiCount": 8077,
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
@@ -609,6 +618,10 @@
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
@@ -3396,6 +3409,7 @@
     "NavigateEvent.prototype.destination",
     "NavigateEvent.prototype.downloadRequest",
     "NavigateEvent.prototype.formData",
+    "NavigateEvent.prototype.hasUAVisualTransition",
     "NavigateEvent.prototype.hashChange",
     "NavigateEvent.prototype.info",
     "NavigateEvent.prototype.intercept",
@@ -4357,6 +4371,7 @@
     "PointerEvent.prototype.width",
     "PopStateEvent",
     "PopStateEvent.prototype",
+    "PopStateEvent.prototype.hasUAVisualTransition",
     "PopStateEvent.prototype.state",
     "Presentation",
     "Presentation.prototype",
@@ -5164,6 +5179,7 @@
     "SVGGElement.prototype",
     "SVGImageElement",
     "SVGImageElement.prototype",
+    "SVGImageElement.prototype.crossOrigin",
     "SVGImageElement.prototype.decode",
     "SVGImageElement.prototype.decoding",
     "SVGImageElement.prototype.height",
@@ -6084,8 +6100,11 @@
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

  
#### 117.0.5938.149 (`2023-10-4`) 
No browser API changes.

  
#### 117.0.5938.132 (`2023-9-27`) 
No browser API changes.

  
#### 117.0.5938.92 (`2023-9-21`) 
No browser API changes.

  
#### 117.0.5938.88 (`2023-9-15`) 
No browser API changes.

  
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

  
### chrome-unstable
  
#### 124.0.6329.0 (`2024-3-4`) ⚡
Added 7 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_124.0.6315.2_to_124.0.6329.0.diff), [json](./browser_apis/chrome-unstable_124.0.6315.2_to_124.0.6329.0.json), [full list](./browser_apis/chrome-unstable_124.0.6329.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_124.0.6315.2.json	2024-03-05 00:53:14.497113588 +0000
+++ ./browser_apis/chrome-unstable_124.0.6329.0.json	2024-03-05 00:53:48.257216749 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8242,
+  "browserApiCount": 8249,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2433,6 +2433,7 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
+    "HTMLTemplateElement.prototype.shadowRootClonable",
     "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
@@ -4108,6 +4109,7 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
+    "Option.prototype.constructor.prototype.setHTMLUnsafe",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.showPopover",
@@ -4635,11 +4637,13 @@
     "RTCIceCandidate.prototype.protocol",
     "RTCIceCandidate.prototype.relatedAddress",
     "RTCIceCandidate.prototype.relatedPort",
+    "RTCIceCandidate.prototype.relayProtocol",
     "RTCIceCandidate.prototype.sdpMLineIndex",
     "RTCIceCandidate.prototype.sdpMid",
     "RTCIceCandidate.prototype.tcpType",
     "RTCIceCandidate.prototype.toJSON",
     "RTCIceCandidate.prototype.type",
+    "RTCIceCandidate.prototype.url",
     "RTCIceCandidate.prototype.usernameFragment",
     "RTCIceTransport",
     "RTCIceTransport.prototype",
@@ -5882,6 +5886,7 @@
     "ShadowRoot.prototype.append",
     "ShadowRoot.prototype.childElementCount",
     "ShadowRoot.prototype.children",
+    "ShadowRoot.prototype.clonable",
     "ShadowRoot.prototype.constructor",
     "ShadowRoot.prototype.delegatesFocus",
     "ShadowRoot.prototype.elementFromPoint",
@@ -5903,6 +5908,7 @@
     "ShadowRoot.prototype.querySelector",
     "ShadowRoot.prototype.querySelectorAll",
     "ShadowRoot.prototype.replaceChildren",
+    "ShadowRoot.prototype.setHTMLUnsafe",
     "ShadowRoot.prototype.slotAssignment",
     "ShadowRoot.prototype.styleSheets",
     "SharedWorker",
@@ -7379,6 +7385,7 @@
     "XMLDocument.prototype.close",
     "XMLDocument.prototype.compatMode",
     "XMLDocument.prototype.constructor",
+    "XMLDocument.prototype.constructor.parseHTMLUnsafe",
     "XMLDocument.prototype.contentType",
     "XMLDocument.prototype.cookie",
     "XMLDocument.prototype.createAttribute",
```

  
#### 124.0.6315.2 (`2024-2-23`) ⚡
Added 4 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_123.0.6300.3_to_124.0.6315.2.diff), [json](./browser_apis/chrome-unstable_123.0.6300.3_to_124.0.6315.2.json), [full list](./browser_apis/chrome-unstable_124.0.6315.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6300.3.json	2024-02-24 00:51:11.537165991 +0000
+++ ./browser_apis/chrome-unstable_124.0.6315.2.json	2024-02-24 00:51:38.648970394 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8238,
+  "browserApiCount": 8242,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -509,6 +509,7 @@
     "CSSKeyframesRule.prototype.cssRules",
     "CSSKeyframesRule.prototype.deleteRule",
     "CSSKeyframesRule.prototype.findRule",
+    "CSSKeyframesRule.prototype.length",
     "CSSKeyframesRule.prototype.name",
     "CSSKeywordValue",
     "CSSKeywordValue.prototype",
@@ -2432,6 +2433,7 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
+    "HTMLTemplateElement.prototype.shadowRootDelegatesFocus",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
@@ -4671,6 +4673,7 @@
     "RTCRtpReceiver.prototype.getParameters",
     "RTCRtpReceiver.prototype.getStats",
     "RTCRtpReceiver.prototype.getSynchronizationSources",
+    "RTCRtpReceiver.prototype.jitterBufferTarget",
     "RTCRtpReceiver.prototype.playoutDelayHint",
     "RTCRtpReceiver.prototype.rtcpTransport",
     "RTCRtpReceiver.prototype.track",
@@ -4891,6 +4894,7 @@
     "Request.prototype.referrer",
     "Request.prototype.referrerPolicy",
     "Request.prototype.signal",
+    "Request.prototype.targetAddressSpace",
     "Request.prototype.text",
     "Request.prototype.url",
     "ResizeObserver",
```

  
#### 123.0.6300.3 (`2024-2-15`) ⚡
Added 0 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_123.0.6286.0_to_123.0.6300.3.diff), [json](./browser_apis/chrome-unstable_123.0.6286.0_to_123.0.6300.3.json), [full list](./browser_apis/chrome-unstable_123.0.6300.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6286.0.json	2024-02-16 00:53:12.142636865 +0000
+++ ./browser_apis/chrome-unstable_123.0.6300.3.json	2024-02-16 00:53:57.522219321 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8239,
+  "browserApiCount": 8238,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3400,7 +3400,6 @@
     "MessagePort",
     "MessagePort.prototype",
     "MessagePort.prototype.close",
-    "MessagePort.prototype.onclose",
     "MessagePort.prototype.onmessage",
     "MessagePort.prototype.onmessageerror",
     "MessagePort.prototype.postMessage",
```

  
#### 123.0.6286.0 (`2024-2-8`) ⚡
Added 12 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_123.0.6272.2_to_123.0.6286.0.diff), [json](./browser_apis/chrome-unstable_123.0.6272.2_to_123.0.6286.0.json), [full list](./browser_apis/chrome-unstable_123.0.6286.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6272.2.json	2024-02-09 00:53:04.063233369 +0000
+++ ./browser_apis/chrome-unstable_123.0.6286.0.json	2024-02-09 00:53:46.279274975 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8228,
+  "browserApiCount": 8239,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -3462,6 +3462,7 @@
     "NavigateEvent.prototype.userInitiated",
     "Navigation",
     "Navigation.prototype",
+    "Navigation.prototype.activation",
     "Navigation.prototype.back",
     "Navigation.prototype.canGoBack",
     "Navigation.prototype.canGoForward",
@@ -3477,6 +3478,11 @@
     "Navigation.prototype.transition",
     "Navigation.prototype.traverseTo",
     "Navigation.prototype.updateCurrentEntry",
+    "NavigationActivation",
+    "NavigationActivation.prototype",
+    "NavigationActivation.prototype.entry",
+    "NavigationActivation.prototype.from",
+    "NavigationActivation.prototype.navigationType",
     "NavigationCurrentEntryChangeEvent",
     "NavigationCurrentEntryChangeEvent.prototype",
     "NavigationCurrentEntryChangeEvent.prototype.from",
@@ -4138,6 +4144,8 @@
     "OverconstrainedError",
     "OverconstrainedError.prototype",
     "OverconstrainedError.prototype.constraint",
+    "PageRevealEvent",
+    "PageRevealEvent.prototype",
     "PageTransitionEvent",
     "PageTransitionEvent.prototype",
     "PageTransitionEvent.prototype.persisted",
@@ -4350,7 +4358,9 @@
     "PerformanceScriptTiming.prototype.invoker",
     "PerformanceScriptTiming.prototype.invokerType",
     "PerformanceScriptTiming.prototype.pauseDuration",
-    "PerformanceScriptTiming.prototype.sourceLocation",
+    "PerformanceScriptTiming.prototype.sourceCharPosition",
+    "PerformanceScriptTiming.prototype.sourceFunctionName",
+    "PerformanceScriptTiming.prototype.sourceURL",
     "PerformanceScriptTiming.prototype.toJSON",
     "PerformanceScriptTiming.prototype.window",
     "PerformanceScriptTiming.prototype.windowAttribution",
@@ -8004,6 +8014,7 @@
     "onoffline",
     "ononline",
     "onpagehide",
+    "onpagereveal",
     "onpageshow",
     "onpause",
     "onplay",
```

  
#### 123.0.6272.2 (`2024-2-1`) ⚡
Added 37 APIs, removed 18 (see: [diff](./browser_apis/chrome-unstable_123.0.6262.5_to_123.0.6272.2.diff), [json](./browser_apis/chrome-unstable_123.0.6262.5_to_123.0.6272.2.json), [full list](./browser_apis/chrome-unstable_123.0.6272.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_123.0.6262.5.json	2024-02-02 00:53:58.101240378 +0000
+++ ./browser_apis/chrome-unstable_123.0.6272.2.json	2024-02-02 00:54:25.625101609 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8209,
+  "browserApiCount": 8228,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4267,6 +4267,14 @@
     "PerformanceEventTiming.prototype.processingStart",
     "PerformanceEventTiming.prototype.target",
     "PerformanceEventTiming.prototype.toJSON",
+    "PerformanceLongAnimationFrameTiming",
+    "PerformanceLongAnimationFrameTiming.prototype",
+    "PerformanceLongAnimationFrameTiming.prototype.blockingDuration",
+    "PerformanceLongAnimationFrameTiming.prototype.firstUIEventTimestamp",
+    "PerformanceLongAnimationFrameTiming.prototype.renderStart",
+    "PerformanceLongAnimationFrameTiming.prototype.scripts",
+    "PerformanceLongAnimationFrameTiming.prototype.styleAndLayoutStart",
+    "PerformanceLongAnimationFrameTiming.prototype.toJSON",
     "PerformanceLongTaskTiming",
     "PerformanceLongTaskTiming.prototype",
     "PerformanceLongTaskTiming.prototype.attribution",
@@ -4335,6 +4343,17 @@
     "PerformanceResourceTiming.prototype.toJSON",
     "PerformanceResourceTiming.prototype.transferSize",
     "PerformanceResourceTiming.prototype.workerStart",
+    "PerformanceScriptTiming",
+    "PerformanceScriptTiming.prototype",
+    "PerformanceScriptTiming.prototype.executionStart",
+    "PerformanceScriptTiming.prototype.forcedStyleAndLayoutDuration",
+    "PerformanceScriptTiming.prototype.invoker",
+    "PerformanceScriptTiming.prototype.invokerType",
+    "PerformanceScriptTiming.prototype.pauseDuration",
+    "PerformanceScriptTiming.prototype.sourceLocation",
+    "PerformanceScriptTiming.prototype.toJSON",
+    "PerformanceScriptTiming.prototype.window",
+    "PerformanceScriptTiming.prototype.windowAttribution",
     "PerformanceServerTiming",
     "PerformanceServerTiming.prototype",
     "PerformanceServerTiming.prototype.description",
@@ -7238,27 +7257,9 @@
     "WheelEvent.prototype.clientY",
     "WheelEvent.prototype.constructor",
     "WheelEvent.prototype.constructor.prototype",
-    "WheelEvent.prototype.constructor.prototype.bubbles",
-    "WheelEvent.prototype.constructor.prototype.cancelBubble",
-    "WheelEvent.prototype.constructor.prototype.cancelable",
-    "WheelEvent.prototype.constructor.prototype.composed",
-    "WheelEvent.prototype.constructor.prototype.composedPath",
-    "WheelEvent.prototype.constructor.prototype.constructor",
-    "WheelEvent.prototype.constructor.prototype.currentTarget",
-    "WheelEvent.prototype.constructor.prototype.defaultPrevented",
     "WheelEvent.prototype.constructor.prototype.detail",
-    "WheelEvent.prototype.constructor.prototype.eventPhase",
-    "WheelEvent.prototype.constructor.prototype.initEvent",
     "WheelEvent.prototype.constructor.prototype.initUIEvent",
-    "WheelEvent.prototype.constructor.prototype.preventDefault",
-    "WheelEvent.prototype.constructor.prototype.returnValue",
     "WheelEvent.prototype.constructor.prototype.sourceCapabilities",
-    "WheelEvent.prototype.constructor.prototype.srcElement",
-    "WheelEvent.prototype.constructor.prototype.stopImmediatePropagation",
-    "WheelEvent.prototype.constructor.prototype.stopPropagation",
-    "WheelEvent.prototype.constructor.prototype.target",
-    "WheelEvent.prototype.constructor.prototype.timeStamp",
-    "WheelEvent.prototype.constructor.prototype.type",
     "WheelEvent.prototype.constructor.prototype.view",
     "WheelEvent.prototype.constructor.prototype.which",
     "WheelEvent.prototype.ctrlKey",
@@ -7297,7 +7298,25 @@
     "WindowControlsOverlay.prototype.visible",
     "WindowControlsOverlayGeometryChangeEvent",
     "WindowControlsOverlayGeometryChangeEvent.prototype",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.bubbles",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.cancelBubble",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.cancelable",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.composed",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.composedPath",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.constructor",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.currentTarget",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.defaultPrevented",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.eventPhase",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.initEvent",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.preventDefault",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.returnValue",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.srcElement",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.stopImmediatePropagation",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.stopPropagation",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.target",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.timeStamp",
     "WindowControlsOverlayGeometryChangeEvent.prototype.titlebarAreaRect",
+    "WindowControlsOverlayGeometryChangeEvent.prototype.type",
     "WindowControlsOverlayGeometryChangeEvent.prototype.visible",
     "Worker",
     "Worker.prototype",
```

  
#### 123.0.6262.5 (`2024-1-25`) ⚡
Added 11 APIs, removed 7 (see: [diff](./browser_apis/chrome-unstable_122.0.6253.3_to_123.0.6262.5.diff), [json](./browser_apis/chrome-unstable_122.0.6253.3_to_123.0.6262.5.json), [full list](./browser_apis/chrome-unstable_123.0.6262.5.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6253.3.json	2024-01-26 00:54:23.253209518 +0000
+++ ./browser_apis/chrome-unstable_123.0.6262.5.json	2024-01-26 00:55:04.009237920 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8205,
+  "browserApiCount": 8209,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2675,6 +2675,7 @@
     "IIRFilterNode.prototype",
     "IIRFilterNode.prototype.getFrequencyResponse",
     "IdentityCredential",
+    "IdentityCredential.disconnect",
     "IdentityCredential.prototype",
     "IdentityCredential.prototype.isAutoSelected",
     "IdentityCredential.prototype.token",
@@ -3399,6 +3400,7 @@
     "MessagePort",
     "MessagePort.prototype",
     "MessagePort.prototype.close",
+    "MessagePort.prototype.onclose",
     "MessagePort.prototype.onmessage",
     "MessagePort.prototype.onmessageerror",
     "MessagePort.prototype.postMessage",
@@ -4194,10 +4196,8 @@
     "PaymentManager.prototype.userHint",
     "PaymentMethodChangeEvent",
     "PaymentMethodChangeEvent.prototype",
-    "PaymentMethodChangeEvent.prototype.constructor",
     "PaymentMethodChangeEvent.prototype.methodDetails",
     "PaymentMethodChangeEvent.prototype.methodName",
-    "PaymentMethodChangeEvent.prototype.updateWith",
     "PaymentRequest",
     "PaymentRequest.prototype",
     "PaymentRequest.prototype.abort",
@@ -4211,6 +4211,9 @@
     "PaymentRequest.prototype.shippingOption",
     "PaymentRequest.prototype.shippingType",
     "PaymentRequest.prototype.show",
+    "PaymentRequestUpdateEvent",
+    "PaymentRequestUpdateEvent.prototype",
+    "PaymentRequestUpdateEvent.prototype.updateWith",
     "PaymentResponse",
     "PaymentResponse.prototype",
     "PaymentResponse.prototype.complete",
@@ -6101,15 +6104,10 @@
     "SyntaxError.prototype",
     "TaskAttributionTiming",
     "TaskAttributionTiming.prototype",
-    "TaskAttributionTiming.prototype.constructor",
     "TaskAttributionTiming.prototype.containerId",
     "TaskAttributionTiming.prototype.containerName",
     "TaskAttributionTiming.prototype.containerSrc",
     "TaskAttributionTiming.prototype.containerType",
-    "TaskAttributionTiming.prototype.duration",
-    "TaskAttributionTiming.prototype.entryType",
-    "TaskAttributionTiming.prototype.name",
-    "TaskAttributionTiming.prototype.startTime",
     "TaskAttributionTiming.prototype.toJSON",
     "TaskController",
     "TaskController.prototype",
@@ -6603,6 +6601,12 @@
     "VirtualKeyboardGeometryChangeEvent.prototype",
     "VisibilityStateEntry",
     "VisibilityStateEntry.prototype",
+    "VisibilityStateEntry.prototype.constructor",
+    "VisibilityStateEntry.prototype.duration",
+    "VisibilityStateEntry.prototype.entryType",
+    "VisibilityStateEntry.prototype.name",
+    "VisibilityStateEntry.prototype.startTime",
+    "VisibilityStateEntry.prototype.toJSON",
     "VisualViewport",
     "VisualViewport.prototype",
     "VisualViewport.prototype.height",
```

  
#### 122.0.6253.3 (`2024-1-18`) ⚡
Added 24 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_122.0.6238.2_to_122.0.6253.3.diff), [json](./browser_apis/chrome-unstable_122.0.6238.2_to_122.0.6253.3.json), [full list](./browser_apis/chrome-unstable_122.0.6253.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6238.2.json	2024-01-19 00:58:10.232446419 +0000
+++ ./browser_apis/chrome-unstable_122.0.6253.3.json	2024-01-19 00:58:29.752635096 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8182,
+  "browserApiCount": 8205,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2432,7 +2432,6 @@
     "HTMLTemplateElement",
     "HTMLTemplateElement.prototype",
     "HTMLTemplateElement.prototype.content",
-    "HTMLTemplateElement.prototype.shadowRoot",
     "HTMLTemplateElement.prototype.shadowRootMode",
     "HTMLTextAreaElement",
     "HTMLTextAreaElement.prototype",
@@ -3558,6 +3557,7 @@
     "Navigator.prototype.serviceWorker",
     "Navigator.prototype.setAppBadge",
     "Navigator.prototype.storage",
+    "Navigator.prototype.storageBuckets",
     "Navigator.prototype.unregisterProtocolHandler",
     "Navigator.prototype.usb",
     "Navigator.prototype.userActivation",
@@ -5828,10 +5828,17 @@
     "Set.prototype.add",
     "Set.prototype.clear",
     "Set.prototype.delete",
+    "Set.prototype.difference",
     "Set.prototype.entries",
     "Set.prototype.forEach",
     "Set.prototype.has",
+    "Set.prototype.intersection",
+    "Set.prototype.isDisjointFrom",
+    "Set.prototype.isSubsetOf",
+    "Set.prototype.isSupersetOf",
     "Set.prototype.size",
+    "Set.prototype.symmetricDifference",
+    "Set.prototype.union",
     "Set.prototype.values",
     "ShadowRoot",
     "ShadowRoot.prototype",
@@ -5950,6 +5957,22 @@
     "Storage.prototype.length",
     "Storage.prototype.removeItem",
     "Storage.prototype.setItem",
+    "StorageBucket",
+    "StorageBucket.prototype",
+    "StorageBucket.prototype.caches",
+    "StorageBucket.prototype.estimate",
+    "StorageBucket.prototype.expires",
+    "StorageBucket.prototype.getDirectory",
+    "StorageBucket.prototype.indexedDB",
+    "StorageBucket.prototype.name",
+    "StorageBucket.prototype.persist",
+    "StorageBucket.prototype.persisted",
+    "StorageBucket.prototype.setExpires",
+    "StorageBucketManager",
+    "StorageBucketManager.prototype",
+    "StorageBucketManager.prototype.delete",
+    "StorageBucketManager.prototype.keys",
+    "StorageBucketManager.prototype.open",
     "StorageEvent",
     "StorageEvent.prototype",
     "StorageEvent.prototype.initStorageEvent",
```

  
#### 122.0.6238.2 (`2024-1-11`) ⚡
Added 19 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_122.0.6226.2_to_122.0.6238.2.diff), [json](./browser_apis/chrome-unstable_122.0.6226.2_to_122.0.6238.2.json), [full list](./browser_apis/chrome-unstable_122.0.6238.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6226.2.json	2024-01-12 00:58:19.096227133 +0000
+++ ./browser_apis/chrome-unstable_122.0.6238.2.json	2024-01-12 00:58:46.580315693 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8163,
+  "browserApiCount": 8182,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2905,6 +2905,21 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
+    "Iterator",
+    "Iterator.from",
+    "Iterator.prototype",
+    "Iterator.prototype.constructor",
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
@@ -6741,7 +6756,9 @@
     "WebGL2RenderingContext.prototype.drawElementsInstanced",
     "WebGL2RenderingContext.prototype.drawRangeElements",
     "WebGL2RenderingContext.prototype.drawingBufferColorSpace",
+    "WebGL2RenderingContext.prototype.drawingBufferFormat",
     "WebGL2RenderingContext.prototype.drawingBufferHeight",
+    "WebGL2RenderingContext.prototype.drawingBufferStorage",
     "WebGL2RenderingContext.prototype.drawingBufferWidth",
     "WebGL2RenderingContext.prototype.enable",
     "WebGL2RenderingContext.prototype.enableVertexAttribArray",
@@ -6961,7 +6978,9 @@
     "WebGLRenderingContext.prototype.drawArrays",
     "WebGLRenderingContext.prototype.drawElements",
     "WebGLRenderingContext.prototype.drawingBufferColorSpace",
+    "WebGLRenderingContext.prototype.drawingBufferFormat",
     "WebGLRenderingContext.prototype.drawingBufferHeight",
+    "WebGLRenderingContext.prototype.drawingBufferStorage",
     "WebGLRenderingContext.prototype.drawingBufferWidth",
     "WebGLRenderingContext.prototype.enable",
     "WebGLRenderingContext.prototype.enableVertexAttribArray",
```

  
#### 122.0.6226.2 (`2024-1-5`) ⚡
Added 1 APIs, removed 7 (see: [diff](./browser_apis/chrome-unstable_122.0.6182.0_to_122.0.6226.2.diff), [json](./browser_apis/chrome-unstable_122.0.6182.0_to_122.0.6226.2.json), [full list](./browser_apis/chrome-unstable_122.0.6226.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6182.0.json	2024-01-06 00:55:54.949918177 +0000
+++ ./browser_apis/chrome-unstable_122.0.6226.2.json	2024-01-06 00:56:15.305829843 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8169,
+  "browserApiCount": 8163,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -848,13 +848,6 @@
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
-    "CloseWatcher",
-    "CloseWatcher.prototype",
-    "CloseWatcher.prototype.close",
-    "CloseWatcher.prototype.destroy",
-    "CloseWatcher.prototype.oncancel",
-    "CloseWatcher.prototype.onclose",
-    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -2046,6 +2039,7 @@
     "HTMLHtmlElement.prototype.version",
     "HTMLIFrameElement",
     "HTMLIFrameElement.prototype",
+    "HTMLIFrameElement.prototype.adAuctionHeaders",
     "HTMLIFrameElement.prototype.align",
     "HTMLIFrameElement.prototype.allow",
     "HTMLIFrameElement.prototype.allowFullscreen",
```

  
#### 122.0.6182.0 (`2023-12-14`) ⚡
Added 2 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_122.0.6170.5_to_122.0.6182.0.diff), [json](./browser_apis/chrome-unstable_122.0.6170.5_to_122.0.6182.0.json), [full list](./browser_apis/chrome-unstable_122.0.6182.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_122.0.6170.5.json	2023-12-15 00:57:48.155735726 +0000
+++ ./browser_apis/chrome-unstable_122.0.6182.0.json	2023-12-15 00:58:07.811719749 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8167,
+  "browserApiCount": 8169,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1382,6 +1382,7 @@
     "FileSystemFileHandle.prototype.move",
     "FileSystemWritableFileStream",
     "FileSystemWritableFileStream.prototype",
+    "FileSystemWritableFileStream.prototype.mode",
     "FileSystemWritableFileStream.prototype.seek",
     "FileSystemWritableFileStream.prototype.truncate",
     "FileSystemWritableFileStream.prototype.write",
@@ -6301,6 +6302,7 @@
     "URLPattern",
     "URLPattern.prototype",
     "URLPattern.prototype.exec",
+    "URLPattern.prototype.hasRegExpGroups",
     "URLPattern.prototype.hash",
     "URLPattern.prototype.hostname",
     "URLPattern.prototype.password",
```

  
#### 122.0.6170.5 (`2023-12-11`) 
No browser API changes.

  
#### 122.0.6170.3 (`2023-12-8`) ⚡
Added 0 APIs, removed 1 (see: [diff](./browser_apis/chrome-unstable_121.0.6156.3_to_122.0.6170.3.diff), [json](./browser_apis/chrome-unstable_121.0.6156.3_to_122.0.6170.3.json), [full list](./browser_apis/chrome-unstable_122.0.6170.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_121.0.6156.3.json	2023-12-09 00:55:40.766811927 +0000
+++ ./browser_apis/chrome-unstable_122.0.6170.3.json	2023-12-09 00:55:59.382898134 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8168,
+  "browserApiCount": 8167,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1500,7 +1500,6 @@
     "GPUCommandEncoder.prototype.popDebugGroup",
     "GPUCommandEncoder.prototype.pushDebugGroup",
     "GPUCommandEncoder.prototype.resolveQuerySet",
-    "GPUCommandEncoder.prototype.writeTimestamp",
     "GPUCompilationInfo",
     "GPUCompilationInfo.prototype",
     "GPUCompilationInfo.prototype.messages",
```

  
#### 121.0.6156.3 (`2023-12-1`) ⚡
Added 19 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_121.0.6129.0_to_121.0.6156.3.diff), [json](./browser_apis/chrome-unstable_121.0.6129.0_to_121.0.6156.3.json), [full list](./browser_apis/chrome-unstable_121.0.6156.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_121.0.6129.0.json	2023-12-02 00:55:15.258713966 +0000
+++ ./browser_apis/chrome-unstable_121.0.6156.3.json	2023-12-02 00:55:45.386568123 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8149,
+  "browserApiCount": 8168,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2330,6 +2330,7 @@
     "HTMLSelectElement.prototype.selectedIndex",
     "HTMLSelectElement.prototype.selectedOptions",
     "HTMLSelectElement.prototype.setCustomValidity",
+    "HTMLSelectElement.prototype.showPicker",
     "HTMLSelectElement.prototype.size",
     "HTMLSelectElement.prototype.type",
     "HTMLSelectElement.prototype.validationMessage",
@@ -5879,6 +5880,17 @@
     "SourceBufferList.prototype.length",
     "SourceBufferList.prototype.onaddsourcebuffer",
     "SourceBufferList.prototype.onremovesourcebuffer",
+    "SpeechSynthesis",
+    "SpeechSynthesis.prototype",
+    "SpeechSynthesis.prototype.cancel",
+    "SpeechSynthesis.prototype.getVoices",
+    "SpeechSynthesis.prototype.onvoiceschanged",
+    "SpeechSynthesis.prototype.pause",
+    "SpeechSynthesis.prototype.paused",
+    "SpeechSynthesis.prototype.pending",
+    "SpeechSynthesis.prototype.resume",
+    "SpeechSynthesis.prototype.speak",
+    "SpeechSynthesis.prototype.speaking",
     "SpeechSynthesisErrorEvent",
     "SpeechSynthesisErrorEvent.prototype",
     "SpeechSynthesisErrorEvent.prototype.charIndex",
@@ -5903,6 +5915,13 @@
     "SpeechSynthesisUtterance.prototype.text",
     "SpeechSynthesisUtterance.prototype.voice",
     "SpeechSynthesisUtterance.prototype.volume",
+    "SpeechSynthesisVoice",
+    "SpeechSynthesisVoice.prototype",
+    "SpeechSynthesisVoice.prototype.default",
+    "SpeechSynthesisVoice.prototype.lang",
+    "SpeechSynthesisVoice.prototype.localService",
+    "SpeechSynthesisVoice.prototype.name",
+    "SpeechSynthesisVoice.prototype.voiceURI",
     "StaticRange",
     "StaticRange.prototype",
     "StaticRange.prototype.collapsed",
```

  
#### 121.0.6129.0 (`2023-11-16`) ⚡
Added 68 APIs, removed 30 (see: [diff](./browser_apis/chrome-unstable_121.0.6115.2_to_121.0.6129.0.diff), [json](./browser_apis/chrome-unstable_121.0.6115.2_to_121.0.6129.0.json), [full list](./browser_apis/chrome-unstable_121.0.6129.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_121.0.6115.2.json	2023-11-17 00:56:47.600454082 +0000
+++ ./browser_apis/chrome-unstable_121.0.6129.0.json	2023-11-17 00:57:07.108307375 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8111,
+  "browserApiCount": 8149,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -34,32 +34,6 @@
     "AnalyserNode.prototype.maxDecibels",
     "AnalyserNode.prototype.minDecibels",
     "AnalyserNode.prototype.smoothingTimeConstant",
-    "Animation",
-    "Animation.prototype",
-    "Animation.prototype.cancel",
-    "Animation.prototype.commitStyles",
-    "Animation.prototype.currentTime",
-    "Animation.prototype.effect",
-    "Animation.prototype.finish",
-    "Animation.prototype.finished",
-    "Animation.prototype.id",
-    "Animation.prototype.oncancel",
-    "Animation.prototype.onfinish",
-    "Animation.prototype.onremove",
-    "Animation.prototype.pause",
-    "Animation.prototype.pending",
-    "Animation.prototype.persist",
-    "Animation.prototype.play",
-    "Animation.prototype.playState",
-    "Animation.prototype.playbackRate",
-    "Animation.prototype.rangeEnd",
-    "Animation.prototype.rangeStart",
-    "Animation.prototype.ready",
-    "Animation.prototype.replaceState",
-    "Animation.prototype.reverse",
-    "Animation.prototype.startTime",
-    "Animation.prototype.timeline",
-    "Animation.prototype.updatePlaybackRate",
     "AnimationEvent",
     "AnimationEvent.prototype",
     "AnimationEvent.prototype.animationName",
@@ -69,10 +43,6 @@
     "AnimationPlaybackEvent.prototype",
     "AnimationPlaybackEvent.prototype.currentTime",
     "AnimationPlaybackEvent.prototype.timelineTime",
-    "AnimationTimeline",
-    "AnimationTimeline.prototype",
-    "AnimationTimeline.prototype.currentTime",
-    "AnimationTimeline.prototype.duration",
     "Array",
     "Array.from",
     "Array.fromAsync",
@@ -528,6 +498,7 @@
     "CSSImportRule.prototype.layerName",
     "CSSImportRule.prototype.media",
     "CSSImportRule.prototype.styleSheet",
+    "CSSImportRule.prototype.supportsText",
     "CSSKeyframeRule",
     "CSSKeyframeRule.prototype",
     "CSSKeyframeRule.prototype.keyText",
@@ -685,7 +656,32 @@
     "CSSTransformValue.prototype.toMatrix",
     "CSSTransition",
     "CSSTransition.prototype",
+    "CSSTransition.prototype.cancel",
+    "CSSTransition.prototype.commitStyles",
+    "CSSTransition.prototype.constructor",
+    "CSSTransition.prototype.currentTime",
+    "CSSTransition.prototype.effect",
+    "CSSTransition.prototype.finish",
+    "CSSTransition.prototype.finished",
+    "CSSTransition.prototype.id",
+    "CSSTransition.prototype.oncancel",
+    "CSSTransition.prototype.onfinish",
+    "CSSTransition.prototype.onremove",
+    "CSSTransition.prototype.pause",
+    "CSSTransition.prototype.pending",
+    "CSSTransition.prototype.persist",
+    "CSSTransition.prototype.play",
+    "CSSTransition.prototype.playState",
+    "CSSTransition.prototype.playbackRate",
+    "CSSTransition.prototype.rangeEnd",
+    "CSSTransition.prototype.rangeStart",
+    "CSSTransition.prototype.ready",
+    "CSSTransition.prototype.replaceState",
+    "CSSTransition.prototype.reverse",
+    "CSSTransition.prototype.startTime",
+    "CSSTransition.prototype.timeline",
     "CSSTransition.prototype.transitionProperty",
+    "CSSTransition.prototype.updatePlaybackRate",
     "CSSTranslate",
     "CSSTranslate.prototype",
     "CSSTranslate.prototype.constructor",
@@ -829,6 +825,10 @@
     "ChannelMergerNode.prototype",
     "ChannelSplitterNode",
     "ChannelSplitterNode.prototype",
+    "CharacterBoundsUpdateEvent",
+    "CharacterBoundsUpdateEvent.prototype",
+    "CharacterBoundsUpdateEvent.prototype.rangeEnd",
+    "CharacterBoundsUpdateEvent.prototype.rangeStart",
     "Clipboard",
     "Clipboard.prototype",
     "Clipboard.prototype.read",
@@ -1166,6 +1166,9 @@
     "DocumentPictureInPictureEvent.prototype.window",
     "DocumentTimeline",
     "DocumentTimeline.prototype",
+    "DocumentTimeline.prototype.constructor",
+    "DocumentTimeline.prototype.currentTime",
+    "DocumentTimeline.prototype.duration",
     "DocumentType",
     "DocumentType.prototype",
     "DocumentType.prototype.after",
@@ -1186,6 +1189,24 @@
     "DynamicsCompressorNode.prototype.reduction",
     "DynamicsCompressorNode.prototype.release",
     "DynamicsCompressorNode.prototype.threshold",
+    "EditContext",
+    "EditContext.prototype",
+    "EditContext.prototype.attachedElements",
+    "EditContext.prototype.characterBounds",
+    "EditContext.prototype.characterBoundsRangeStart",
+    "EditContext.prototype.oncharacterboundsupdate",
+    "EditContext.prototype.oncompositionend",
+    "EditContext.prototype.oncompositionstart",
+    "EditContext.prototype.ontextformatupdate",
+    "EditContext.prototype.ontextupdate",
+    "EditContext.prototype.selectionEnd",
+    "EditContext.prototype.selectionStart",
+    "EditContext.prototype.text",
+    "EditContext.prototype.updateCharacterBounds",
+    "EditContext.prototype.updateControlBounds",
+    "EditContext.prototype.updateSelection",
+    "EditContext.prototype.updateSelectionBounds",
+    "EditContext.prototype.updateText",
     "ElementInternals",
     "ElementInternals.prototype",
     "ElementInternals.prototype.ariaAtomic",
@@ -3886,6 +3907,7 @@
     "Option.prototype.constructor.prototype.dataset",
     "Option.prototype.constructor.prototype.dir",
     "Option.prototype.constructor.prototype.draggable",
+    "Option.prototype.constructor.prototype.editContext",
     "Option.prototype.constructor.prototype.elementTiming",
     "Option.prototype.constructor.prototype.enterKeyHint",
     "Option.prototype.constructor.prototype.firstElementChild",
@@ -6106,6 +6128,15 @@
     "TextEvent.prototype",
     "TextEvent.prototype.data",
     "TextEvent.prototype.initTextEvent",
+    "TextFormat",
+    "TextFormat.prototype",
+    "TextFormat.prototype.rangeEnd",
+    "TextFormat.prototype.rangeStart",
+    "TextFormat.prototype.underlineStyle",
+    "TextFormat.prototype.underlineThickness",
+    "TextFormatUpdateEvent",
+    "TextFormatUpdateEvent.prototype",
+    "TextFormatUpdateEvent.prototype.getTextFormats",
     "TextMetrics",
     "TextMetrics.prototype",
     "TextMetrics.prototype.actualBoundingBoxAscent",
@@ -6141,6 +6172,13 @@
     "TextTrackList.prototype.onaddtrack",
     "TextTrackList.prototype.onchange",
     "TextTrackList.prototype.onremovetrack",
+    "TextUpdateEvent",
+    "TextUpdateEvent.prototype",
+    "TextUpdateEvent.prototype.selectionEnd",
+    "TextUpdateEvent.prototype.selectionStart",
+    "TextUpdateEvent.prototype.text",
+    "TextUpdateEvent.prototype.updateRangeEnd",
+    "TextUpdateEvent.prototype.updateRangeStart",
     "TimeRanges",
     "TimeRanges.prototype",
     "TimeRanges.prototype.end",
```

  
#### 121.0.6115.2 (`2023-11-9`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_121.0.6103.3_to_121.0.6115.2.diff), [json](./browser_apis/chrome-unstable_121.0.6103.3_to_121.0.6115.2.json), [full list](./browser_apis/chrome-unstable_121.0.6115.2.json))
 ```diff
--- ./browser_apis/chrome-unstable_121.0.6103.3.json	2023-11-10 00:54:42.868258523 +0000
+++ ./browser_apis/chrome-unstable_121.0.6115.2.json	2023-11-10 00:55:17.572648892 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8110,
+  "browserApiCount": 8111,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -75,6 +75,7 @@
     "AnimationTimeline.prototype.duration",
     "Array",
     "Array.from",
+    "Array.fromAsync",
     "Array.isArray",
     "Array.of",
     "Array.prototype",
```

  
#### 121.0.6103.3 (`2023-11-6`) ⚡
Added 19 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_120.0.6090.0_to_121.0.6103.3.diff), [json](./browser_apis/chrome-unstable_120.0.6090.0_to_121.0.6103.3.json), [full list](./browser_apis/chrome-unstable_121.0.6103.3.json))
 ```diff
--- ./browser_apis/chrome-unstable_120.0.6090.0.json	2023-11-07 00:55:14.420956545 +0000
+++ ./browser_apis/chrome-unstable_121.0.6103.3.json	2023-11-07 00:55:35.876980694 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8091,
+  "browserApiCount": 8110,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -841,11 +841,19 @@
     "ClipboardItem.prototype",
     "ClipboardItem.prototype.getType",
     "ClipboardItem.prototype.types",
+    "ClipboardItem.supports",
     "CloseEvent",
     "CloseEvent.prototype",
     "CloseEvent.prototype.code",
     "CloseEvent.prototype.reason",
     "CloseEvent.prototype.wasClean",
+    "CloseWatcher",
+    "CloseWatcher.prototype",
+    "CloseWatcher.prototype.close",
+    "CloseWatcher.prototype.destroy",
+    "CloseWatcher.prototype.oncancel",
+    "CloseWatcher.prototype.onclose",
+    "CloseWatcher.prototype.requestClose",
     "Comment",
     "Comment.prototype",
     "CompositionEvent",
@@ -1623,6 +1631,7 @@
     "GPUSupportedLimits",
     "GPUSupportedLimits.prototype",
     "GPUSupportedLimits.prototype.maxBindGroups",
+    "GPUSupportedLimits.prototype.maxBindGroupsPlusVertexBuffers",
     "GPUSupportedLimits.prototype.maxBindingsPerBindGroup",
     "GPUSupportedLimits.prototype.maxBufferSize",
     "GPUSupportedLimits.prototype.maxColorAttachmentBytesPerSample",
@@ -2651,8 +2660,14 @@
     "IIRFilterNode.prototype.getFrequencyResponse",
     "IdentityCredential",
     "IdentityCredential.prototype",
+    "IdentityCredential.prototype.isAutoSelected",
     "IdentityCredential.prototype.token",
+    "IdentityCredentialError",
+    "IdentityCredentialError.prototype",
+    "IdentityCredentialError.prototype.code",
+    "IdentityCredentialError.prototype.url",
     "IdentityProvider",
+    "IdentityProvider.close",
     "IdentityProvider.getUserInfo",
     "IdentityProvider.prototype",
     "IdleDeadline",
@@ -3487,6 +3502,7 @@
     "Navigator.prototype.language",
     "Navigator.prototype.languages",
     "Navigator.prototype.locks",
+    "Navigator.prototype.login",
     "Navigator.prototype.managed",
     "Navigator.prototype.maxTouchPoints",
     "Navigator.prototype.mediaCapabilities",
@@ -3526,6 +3542,9 @@
     "Navigator.prototype.webkitTemporaryStorage",
     "Navigator.prototype.windowControlsOverlay",
     "Navigator.prototype.xr",
+    "NavigatorLogin",
+    "NavigatorLogin.prototype",
+    "NavigatorLogin.prototype.setStatus",
     "NavigatorManagedData",
     "NavigatorManagedData.prototype",
     "NavigatorManagedData.prototype.getManagedConfiguration",
```

  
#### 120.0.6090.0 (`2023-10-27`) ⚡
Added 9 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_120.0.6073.0_to_120.0.6090.0.diff), [json](./browser_apis/chrome-unstable_120.0.6073.0_to_120.0.6090.0.json), [full list](./browser_apis/chrome-unstable_120.0.6090.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_120.0.6073.0.json	2023-10-28 00:51:51.832888962 +0000
+++ ./browser_apis/chrome-unstable_120.0.6090.0.json	2023-10-28 00:52:45.533484297 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8082,
+  "browserApiCount": 8091,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2775,6 +2775,7 @@
     "IntersectionObserver.prototype.observe",
     "IntersectionObserver.prototype.root",
     "IntersectionObserver.prototype.rootMargin",
+    "IntersectionObserver.prototype.scrollMargin",
     "IntersectionObserver.prototype.takeRecords",
     "IntersectionObserver.prototype.thresholds",
     "IntersectionObserver.prototype.trackVisibility",
@@ -3324,11 +3325,18 @@
     "MediaStreamTrackGenerator.prototype.onmute",
     "MediaStreamTrackGenerator.prototype.onunmute",
     "MediaStreamTrackGenerator.prototype.readyState",
+    "MediaStreamTrackGenerator.prototype.stats",
     "MediaStreamTrackGenerator.prototype.stop",
     "MediaStreamTrackGenerator.prototype.writable",
     "MediaStreamTrackProcessor",
     "MediaStreamTrackProcessor.prototype",
     "MediaStreamTrackProcessor.prototype.readable",
+    "MediaStreamTrackVideoStats",
+    "MediaStreamTrackVideoStats.prototype",
+    "MediaStreamTrackVideoStats.prototype.deliveredFrames",
+    "MediaStreamTrackVideoStats.prototype.discardedFrames",
+    "MediaStreamTrackVideoStats.prototype.toJSON",
+    "MediaStreamTrackVideoStats.prototype.totalFrames",
     "MessageChannel",
     "MessageChannel.prototype",
     "MessageChannel.prototype.port1",
@@ -8066,6 +8074,7 @@
     "webkitSpeechRecognitionEvent.prototype.resultIndex",
     "webkitSpeechRecognitionEvent.prototype.results",
     "webkitURL",
+    "webkitURL.canParse",
     "webkitURL.createObjectURL",
     "webkitURL.prototype",
     "webkitURL.prototype.hash",
```

  
#### 120.0.6073.0 (`2023-10-19`) ⚡
Added 1 APIs, removed 0 (see: [diff](./browser_apis/chrome-unstable_120.0.6062.2_to_120.0.6073.0.diff), [json](./browser_apis/chrome-unstable_120.0.6062.2_to_120.0.6073.0.json), [full list](./browser_apis/chrome-unstable_120.0.6073.0.json))
 ```diff
--- ./browser_apis/chrome-unstable_120.0.6062.2.json	2023-10-20 00:53:40.039750838 +0000
+++ ./browser_apis/chrome-unstable_120.0.6073.0.json	2023-10-20 00:54:13.672163709 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8081,
+  "browserApiCount": 8082,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -1893,6 +1893,7 @@
     "HTMLDataListElement.prototype.options",
     "HTMLDetailsElement",
     "HTMLDetailsElement.prototype",
+    "HTMLDetailsElement.prototype.name",
     "HTMLDetailsElement.prototype.open",
     "HTMLDialogElement",
     "HTMLDialogElement.prototype",
```

  
#### 120.0.6062.2 (`2023-10-13`) 
No browser API changes.

  
#### 120.0.6051.2 (`2023-10-9`) 
No browser API changes.

  
#### 119.0.6045.10 (`2023-10-6`) ⚡
Added 0 APIs, removed 5 (see: [diff](./browser_apis/chrome-unstable_119.0.6034.6_to_119.0.6045.10.diff), [json](./browser_apis/chrome-unstable_119.0.6034.6_to_119.0.6045.10.json), [full list](./browser_apis/chrome-unstable_119.0.6045.10.json))
 ```diff
--- ./browser_apis/chrome-unstable_119.0.6034.6.json	2023-10-07 00:52:52.662830127 +0000
+++ ./browser_apis/chrome-unstable_119.0.6045.10.json	2023-10-07 00:53:26.443156798 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8086,
+  "browserApiCount": 8081,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -4038,7 +4038,6 @@
     "Option.prototype.constructor.prototype.setAttributeNS",
     "Option.prototype.constructor.prototype.setAttributeNode",
     "Option.prototype.constructor.prototype.setAttributeNodeNS",
-    "Option.prototype.constructor.prototype.setHTML",
     "Option.prototype.constructor.prototype.setPointerCapture",
     "Option.prototype.constructor.prototype.shadowRoot",
     "Option.prototype.constructor.prototype.showPopover",
@@ -5614,10 +5613,6 @@
     "SVGViewElement.prototype.viewBox",
     "SVGViewElement.prototype.viewportElement",
     "SVGViewElement.prototype.zoomAndPan",
-    "Sanitizer",
-    "Sanitizer.getDefaultConfiguration",
-    "Sanitizer.prototype",
-    "Sanitizer.prototype.getConfiguration",
     "Scheduler",
     "Scheduler.prototype",
     "Scheduler.prototype.postTask",
```

  
#### 119.0.6034.6 (`2023-9-29`) ⚡
Added 5 APIs, removed 15 (see: [diff](./browser_apis/chrome-unstable_118.0.5993.11_to_119.0.6034.6.diff), [json](./browser_apis/chrome-unstable_118.0.5993.11_to_119.0.6034.6.json), [full list](./browser_apis/chrome-unstable_119.0.6034.6.json))
 ```diff
--- ./browser_apis/chrome-unstable_118.0.5993.11.json	2023-09-30 00:52:18.001052249 +0000
+++ ./browser_apis/chrome-unstable_119.0.6034.6.json	2023-09-30 00:52:56.305658649 +0000
@@ -1,6 +1,6 @@
 {
   "browser": "chrome-unstable",
-  "browserApiCount": 8096,
+  "browserApiCount": 8086,
   "browserApis": [
     "AbsoluteOrientationSensor",
     "AbsoluteOrientationSensor.prototype",
@@ -2871,20 +2871,6 @@
     "Intl.v8BreakIterator.prototype.next",
     "Intl.v8BreakIterator.prototype.resolvedOptions",
     "Intl.v8BreakIterator.supportedLocalesOf",
-    "Iterator",
-    "Iterator.from",
-    "Iterator.prototype",
-    "Iterator.prototype.drop",
-    "Iterator.prototype.every",
-    "Iterator.prototype.filter",
-    "Iterator.prototype.find",
-    "Iterator.prototype.flatMap",
-    "Iterator.prototype.forEach",
-    "Iterator.prototype.map",
-    "Iterator.prototype.reduce",
-    "Iterator.prototype.some",
-    "Iterator.prototype.take",
-    "Iterator.prototype.toArray",
     "JSON",
     "JSON.isRawJSON",
     "JSON.parse",
@@ -4439,6 +4425,7 @@
     "Promise.race",
     "Promise.reject",
     "Promise.resolve",
+    "Promise.withResolvers",
     "PromiseRejectionEvent",
     "PromiseRejectionEvent.prototype",
     "PromiseRejectionEvent.prototype.promise",
@@ -4925,6 +4912,7 @@
     "SVGClipPathElement",
     "SVGClipPathElement.prototype",
     "SVGClipPathElement.prototype.clipPathUnits",
+    "SVGClipPathElement.prototype.transform",
     "SVGDefsElement",
     "SVGDefsElement.prototype",
     "SVGDescElement",
@@ -7289,6 +7277,7 @@
     "XMLDocument.prototype.hasFocus",
     "XMLDocument.prototype.hasPrivateToken",
     "XMLDocument.prototype.hasRedemptionRecord",
+    "XMLDocument.prototype.hasStorageAccess",
     "XMLDocument.prototype.head",
     "XMLDocument.prototype.hidden",
     "XMLDocument.prototype.images",
@@ -7430,6 +7419,8 @@
     "XMLDocument.prototype.referrer",
     "XMLDocument.prototype.releaseEvents",
     "XMLDocument.prototype.replaceChildren",
+    "XMLDocument.prototype.requestStorageAccess",
+    "XMLDocument.prototype.requestStorageAccessFor",
     "XMLDocument.prototype.rootElement",
     "XMLDocument.prototype.scripts",
     "XMLDocument.prototype.scrollingElement",
@@ -7921,7 +7912,6 @@
     "onwebkittransitionend",
     "onwheel",
     "open",
-    "openDatabase",
     "opener",
     "origin",
     "originAgentCluster",
```

  
#### 118.0.5993.11 (`2023-9-13`) 
No browser API changes.

  
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

  <!-- browserapis:end -->
