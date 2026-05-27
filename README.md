# Arabic Error Translator 🚀

حزمة خفيفة لترجمة وشرح رسائل خطأ جافا سكريبت الشائعة إلى لغة عربية مبسطة، مصممة خصيصاً لمساعدة الطلاب والمطورين العرب المبتدئين في فهم وتصحيح أخطائهم البرمجية بسرعة.

## التثبيت (Installation)

```bash
npm install arabic-error-translator
```

## الاستخدام (Usage)

```js
const Translator = require('arabic-error-translator');

// ضبط الإعدادات
Translator.logInTerminal = true;     // طباعة في التيرمنال (افتراضي: true)
Translator.saveToFile = false;       // حفظ في ملف .log (افتراضي: false)
Translator.saveToMarkdown = false;   // حفظ في ملف .md منظم (افتراضي: false)

try {
    console.log(myAge);
} catch (error) {
    Translator.translate(error);
}
```

## الخصائص (Features)

### 📄 `saveToFile` — حفظ في ملف نصي
يحفظ الأخطاء في ملف `.log` مع الطابع الزمني:
```js
Translator.saveToFile = true;
// Translator.filePath = './my-logs.log'; // تغيير المسار (اختياري)
```

### 📝 `saveToMarkdown` — حفظ في ملف Markdown 🆕
يحفظ الأخطاء في تقرير Markdown منظم وجاهز للعرض:
```js
Translator.saveToMarkdown = true;
// Translator.markdownPath = './report.md'; // تغيير المسار (اختياري)
```

### 💻 `logInTerminal` — طباعة في التيرمنال
```js
Translator.logInTerminal = true; // الافتراضي: true
```

## أنواع الأخطاء المدعومة

| النوع | اللغة | عدد الأنماط | أمثلة |
|-------|-------|-------------|-------|
| ReferenceError | خطأ في المرجع | 3 | المتغير غير معرف، الوصول قبل التهيئة |
| TypeError | خطأ في النوع | 10 | قراءة خاصية من null/undefined، استدعاء غير دالة |
| SyntaxError | خطأ في القواعد | 10 | أقواس مفقودة، نصوص غير مغلقة |
| RangeError | خطأ في المدى | 4 | تكرار لا نهائي، طول مصفوفة غير صالح |
| URIError | خطأ في الرابط | 2 | رابط غير صالح |

**الإجمالي: 29 نمط خطأ مدعوم** عبر 5 أنواع مختلفة.