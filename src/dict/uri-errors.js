module.exports = {
    "uri malformed": {
        title: "خطأ في الرابط (URIError)",
        arabicMessage: "الرابط (URI) الذي تحاول معالجته غير صالح.",
        explanation: "هذا يحدث عند استخدام دوال مثل encodeURI()، decodeURI()، encodeURIComponent()، أو decodeURIComponent() مع رابط (URI) غير صحيح التركيب.",
        solution: "تأكد من أن الرابط الذي تمرره صحيح. قد يحتوي على أحرف غير مسموح بها مثل % متبوعاً بحرفين غير سداسي عشرين."
    },
    "failed to decode": {
        title: "خطأ في الرابط (URIError)",
        arabicMessage: "فشل في فك تشفير الرابط (URI).",
        explanation: "استخدمت decodeURI() أو decodeURIComponent() على نص مشفر بشكل غير صحيح، مثل وجود % متبوعاً بحرفين غير سداسي عشرين.",
        solution: "تأكد من أن النص الذي تحاول فك تشفيره هو رابط مشفر بشكل صحيح. استخدم encodeURI() أو encodeURIComponent() أولاً."
    }
};