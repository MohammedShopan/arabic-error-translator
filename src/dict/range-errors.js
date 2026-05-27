module.exports = {
    "maximum call stack size exceeded": {
        title: "خطأ في المدى (RangeError)",
        arabicMessage: "تم تجاوز الحجم الأقصى لمكدس الاستدعاءات (Call Stack).",
        explanation: "هذا يعني أن هناك استدعاء لا نهائي أو عميق جداً لدالة - دالة تستدعي نفسها مراراً بدون توقف (Infinite Recursion).",
        solution: "تأكد من أن الدوال العودية (Recursive Functions) تحتوي على شرط توقف (Base Case) يمنع التكرار اللانهائي. تحقق من وجود حلقة لا نهائية."
    },
    "invalid array length": {
        title: "خطأ في المدى (RangeError)",
        arabicMessage: "طول المصفوفة (Array) غير صالح.",
        explanation: "حاولت إنشاء مصفوفة بطول غير صالح - مثل طول سالب، أو طول كبير جداً (أكثر من 2^32 - 1)، أو طول ليس رقماً صحيحاً.",
        solution: "تأكد من أن طول المصفوفة هو رقم صحيح موجب بين 0 و 4294967295."
    },
    "tofixed() digits": {
        title: "خطأ في المدى (RangeError)",
        arabicMessage: "عدد الأرقام العشرية لـ toFixed() غير صالح.",
        explanation: "دالة toFixed() تقبل عدد الأرقام العشرية بين 0 و 100 فقط. لقد استخدمت رقماً خارج هذا النطاق.",
        solution: "تأكد من تمرير رقم بين 0 و 100 إلى دالة toFixed()."
    },
    "precision is out of range": {
        title: "خطأ في المدى (RangeError)",
        arabicMessage: "الدقة (Precision) خارج النطاق المسموح.",
        explanation: "دوال مثل toPrecision() أو toExponential() تتطلب دقة بين 1 و 100. لقد استخدمت رقماً خارج هذا النطاق.",
        solution: "استخدم قيمة بين 1 و 100 لتحديد الدقة."
    }
};
