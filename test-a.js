const Translator = require('./src/index.js'); // استدعاء الكائن

//  ضبط الإعدادات في أعلى الملف مرة واحدة
Translator.saveToFile = true;
Translator.logInTerminal = true;
// Translator.filePath = './custom-path/my-logs.log'; // اختياري لتغيير المسار الافتراضي

try {
    // إحداث خطأ متعمد
 x = null
 x.color = 'red'
} catch (error) {
    // استدعاء الدالة مباشرة دون تمرير أي خيارات إضافية هنا
    Translator.translate(error);
}