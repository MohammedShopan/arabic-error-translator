module.exports = {
    "cannot read properties of null": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "لا يمكن قراءة الخصائص من قيمة فارغة (Null).",
        explanation: "أنت تحاول الوصول إلى خاصية داخل كائن (مثل user.name) ولكن الكائن يساوي null (فارغ) وليس كائن حقيقي.",
        solution: "تأكد من أن القيمة التي تتعامل معها هي كائن حقيقي وليس null. يمكنك استخدام التحقق: if (obj !== null) { obj.prop }"
    },
    "cannot read properties of undefined": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "لا يمكن قراءة الخصائص من قيمة غير معرّفة (Undefined).",
        explanation: "أنت تحاول الوصول إلى خاصية داخل كائن (مثل user.name)، ولكن الكائن نفسه غير موجود (undefined) في هذه اللحظة.",
        solution: "تأكد من أن الكائن يحتوي على بيانات بالفعل قبل محاولة قراءة ما بداخله. يمكنك استخدام السهم الآمن: user?.name"
    },
    "cannot set properties of undefined": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "لا يمكن تعيين خصائص لقيمة غير معرّفة (Undefined).",
        explanation: "أنت تحاول تعيين قيمة لخاصية داخل كائن (مثل user.name = 'Ali') ولكن الكائن نفسه غير موجود (undefined).",
        solution: "تأكد من أن الكائن موجود قبل تعيين خصائصه. يمكنك تهيئة الكائن أولاً: const user = {} أو user = user ?? {}"
    },
    "cannot set properties of null": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "لا يمكن تعيين خصائص لقيمة فارغة (Null).",
        explanation: "أنت تحاول تعيين قيمة لخاصية داخل كائن ولكن الكائن يساوي null.",
        solution: "تأكد من أن الكائن ليس null قبل تعيين خصائصه. قم بتهيئته أولاً."
    },
    "is not a function": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "الشيء الذي تحاول استدعاءه ليس دالة (Function).",
        explanation: "لقد قمت بوضع أقواس الاستدعاء () بعد متغير عادي (مثل نص أو رقم) وليس دالة برمجية.",
        solution: "تأكد من أن المتغير الذي تستدعيه هو دالة بالفعل وليس متغيراً من نوع آخر."
    },
    "is not iterable": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "القيمة التي تحاول تكرارها (Iterate) غير قابلة للتكرار.",
        explanation: "يظهر هذا الخطأ عند استخدام for...of أو spread operator (...) مع قيمة ليست مصفوفة (Array) أو كائن قابل للتكرار.",
        solution: "تأكد من أن القيمة التي تمررها هي مصفوفة أو كائن قابل للتكرار (مثل String, Array, Map, Set)."
    },
    "is not a constructor": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "القيمة التي تحاول استخدامها مع new ليست مُنشِئ (Constructor).",
        explanation: "لقد استخدمت الكلمة الجديدة new مع شيء لا يمكن استخدامه كمنشئ، مثل دالة سهمية (arrow function) أو متغير عادي.",
        solution: "تأكد من استخدام new فقط مع الدوال العادية (function) أو الكلاسات (class). دوال الأسهم لا يمكن استخدامها كمنشئات."
    },
    "assignment to constant variable": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "لا يمكن إعادة تعيين قيمة لمتغير ثابت (const).",
        explanation: "لقد حاولت تغيير قيمة متغير معرف بـ const. المتغيرات الثابتة لا يمكن إعادة تعيينها بعد تعريفها.",
        solution: "استخدم let بدلاً من const إذا كنت تخطط لتغيير قيمة المتغير لاحقاً، أو أنشئ متغيراً جديداً."
    },
    "cannot destructure": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "لا يمكن تفكيك (Destructure) هذه القيمة.",
        explanation: "يحدث هذا عندما تحاول تفكيك (Destructuring) قيمة تساوي undefined أو null، مثل: const { name } = undefined",
        solution: "تأكد من أن القيمة التي تفككها هي كائن (object) موجود. يمكنك استخدام قيمة افتراضية: const { name } = obj || {}"
    },
    "cannot use 'in' operator": {
        title: "خطأ في النوع (TypeError)",
        arabicMessage: "لا يمكن استخدام عامل in على هذه القيمة.",
        explanation: "أنت تستخدم العامل in للتحقق من وجود خاصية في قيمة ليست كائناً (مثل رقم أو نص قيم primitive).",
        solution: "تأكد من استخدام in فقط مع الكائنات (Objects). للأنواع الأخرى استخدم typeof أو طرق أخرى."
    }
};
