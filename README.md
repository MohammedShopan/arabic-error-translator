# Arabic Error Translator 🚀

حزمة خفيفة  لترجمة وشرح رسائل خطأ جافا سكريبت الشائعة إلى لغة عربية مبسطة، مصممة خصيصاً لمساعدة الطلاب والمطورين العرب المبتدئين في فهم وتصحيح أخطائهم البرمجية بسرعة.

## التثبيت (Installation)

```bash
npm install arabic-error-translator
```

لكي تستخدم المكتبة 

```js
const Translator = require('./src/index.js'); // استدعاء الكائن

//  ضبط الإعدادات في أعلى الملف مرة واحدة
Translator.saveToFile = true;
Translator.logInTerminal = true;
// Translator.filePath = './custom-path/my-logs.log'; // اختياري لتغيير المسار الافتراضي

try {
    // إحداث خطأ متعمد
    console.log(myAge); 
} catch (error) {
    // استدعاء الدالة مباشرة دون تمرير أي خيارات إضافية هنا
    Translator.translate(error);
}

```

`Translator.saveToFile = true` لتفعيل خاصية طباعة الخطا المترجم داخل ملف نصي `errors.log` الافتراضي `false`

`Translator.logInTerminal = true` تلفعيل طباعة الخطا المترجم في موجه الأوامر  الافتراضي له  `true`