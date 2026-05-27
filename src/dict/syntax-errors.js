module.exports = {
    "cannot use import statement outside a module": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "لا يمكن استخدام جملة import خارج ملفات الوحدات (Modules).",
        explanation: "أنت تستخدم import (ES Module) في ملف لم يتم تعريفه كوحدة. يجب أن يكون ملف JavaScript معرفاً كوحدة لاستخدام import.",
        solution: "أضف type=\"module\" في وسم <script> في HTML، أو استخدم extension .mjs، أو أضف \"type\": \"module\" في package.json."
    },
    "unterminated template literal": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "القالب النصي (Template Literal) غير مغلق.",
        explanation: "لقد بدأت قالب نصي باستخدام backtick (`) ولكنك لم تغلقه. القوالب النصية يجب أن تبدأ وتنتهي بـ `.",
        solution: "تأكد من إغلاق القالب النصي بـ backtick (`). ابحث عن السطر الذي يحتوي على ` مفتوحة بدون إغلاق."
    },
    "unterminated string": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "النص (String) غير مغلق بشكل صحيح.",
        explanation: "لقد نسيت إغلاق علامات التنصيص (\" أو ') الخاصة بالنص. كل نص يجب أن يبدأ وينتهي بنفس نوع العلامة.",
        solution: "تأكد من أن كل نص مفتوح بـ \" أو ' تم إغلاقه بنفس العلامة في نفس السطر."
    },
    "unexpected token": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "رمز غير متوقع أو في غير مكانه الصحيح.",
        explanation: "هناك خطأ في طريقة كتابة الكود، غالباً نسيت إغلاق قوس، أو نسيت فاصلة، أو كتبت رمزاً في مكان لا تسمح به لغة جافا سكريبت.",
        solution: "راجع السطر المحدد في الخطأ بدقة، وتأكد من أن جميع الأقواس {} () [] مغلقة بشكل صحيح."
    },
    "unexpected identifier": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "معرف (Identifier) غير متوقع في هذا المكان.",
        explanation: "ظهر اسم متغير أو كلمة في مكان لا تتوقعه جافا سكريبت. مثلاً نسيت فاصلة بين عناصر مصفوفة أو فاصل (;) بين جمل.",
        solution: "تحقق من علامات الترقيم (الفاصلة , والفاصلة المنقوطة ;) والأقواس في السطر المشار إليه."
    },
    "unexpected number": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "رقم غير متوقع في هذا المكان.",
        explanation: "ظهر رقم في مكان لا تتوقعه جافا سكريبت. مثلاً استخدام رقم كاسم متغير: const 123name = 'test'",
        solution: "تأكد من عدم استخدام رقم في بداية اسم متغير، وأن الأرقام فقط في الأماكن الصحيحة."
    },
    "missing ) after argument list": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "قوس إغلاق ) مفقود بعد قائمة الوسائط.",
        explanation: "لقد نسيت إغلاق القوس الذي فتحته عند استدعاء دالة. كل ( تحتاج إلى ) مقابل.",
        solution: "ابحث عن استدعاء الدالة وأضف قوس الإغلاق ) في المكان الصحيح."
    },
    "missing } after": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "قوس إغلاق } مفقود.",
        explanation: "لقد نسيت إغلاق القوس المعقوف {. كل { تحتاج إلى } مقابل، سواء للكائنات أو الجمل البرمجية.",
        solution: "تأكد من أن كل { لديها } مطابقة. استخدم محرر أكواد يظهر الأقواس المتطابقة بالألوان."
    },
    "missing ] after": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "قوس إغلاق ] مفقود.",
        explanation: "لقد نسيت إغلاق القوس المربع [ في المصفوفة. كل [ تحتاج إلى ] مقابل.",
        solution: "أضف قوس الإغلاق ] في نهاية المصفوفة."
    },
    "unexpected end of input": {
        title: "خطأ في القواعد (SyntaxError)",
        arabicMessage: "نهاية غير متوقعة للمدخلات - هناك كود ناقص.",
        explanation: "وصلت جافا سكريبت لنهاية الملف أو الكود وهي لا تزال تتوقع المزيد. هذا يعني أنك نسيت إغلاق قوس أو جسم دالة أو شرط.",
        solution: "تأكد من أن جميع الأقواس {} () [] مغلقة، وجميع الدوال والحلقات لها جسم كامل."
    }
};
