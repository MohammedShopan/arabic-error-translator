const fs = require('fs');
const path = require('path');
const referenceErrors = require('./dict/reference-errors');
const typeErrors = require('./dict/type-errors');
const syntaxErrors = require('./dict/syntax-errors');

const allErrors = {
    ...referenceErrors,
    ...typeErrors,
    ...syntaxErrors
};

// إنشاء كائن المترجم
const myTranslator = {
    //  الإعدادات الافتراضية (Default Settings)
    logInTerminal: true,
    saveToFile: false,
    filePath: path.join(process.cwd(), 'errors.log'),

    /**
     * دالة ترجمة وتحليل الأخطاء
     * @param {string|Error} error - كائن الخطأ أو رسالة الخطأ النصية
     * @returns {Object} كائن يحتوي على تفاصيل الخطأ المترجم
     */
    translate: function(error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        const lowerMessage = errorMessage.toLowerCase();
        
        let result = {
            original: errorMessage,
            title: "خطأ غير معروف حالياً",
            arabicMessage: "لم نقم بإضافة ترجمة هذا الخطأ بعد.",
            explanation: "الخطأ المذكور لم يدرج في قاعدة بياناتنا الحالية، لكن يمكنك البحث عنه في جوجل.",
            solution: "حاول قراءة نص الخطأ الإنجليزي بعناية أو ساهم معنا في إضافة ترجمته على جيت هاب!"
        };

        // البحث عن الخطأ في القواميس
        for (const key in allErrors) {
            if (lowerMessage.includes(key)) {
                result = {
                    original: errorMessage,
                    ...allErrors[key]
                };
                break;
            }
        }

        // استخدام الإعدادات المخزنة في الكائن عبر الرمز (this)
        
        // 1. خيار الطباعة في الـ Terminal
        if (this.logInTerminal) {
            console.log(`\n============== ❌ خطأ برمجبي مترجم ==============`);
            console.log(`📌 نوع الخطأ: ${result.title}`);
            console.log(`💬 المعنى:    ${result.arabicMessage}`);
            console.log(`💡 الشرح:    ${result.explanation}`);
            console.log(`🛠️ الحل:     ${result.solution}`);
            console.log(`================================================\n`);
        }

        // 2. خيار الحفظ في ملف .log
        if (this.saveToFile) {
            const timestamp = new Date().toISOString();
            const logContent = `
[${timestamp}]
Original Error: ${result.original}
Title: ${result.title}
Arabic Message: ${result.arabicMessage}
Explanation: ${result.explanation}
Solution: ${result.solution}
-------------------------------------------------------
`;
            
            try {
                // استخدام المسار المخزن في الكائن
                fs.appendFileSync(this.filePath, logContent, 'utf8');
            } catch (fsError) {
                console.error(`❌ فشل حفظ خطأ الترجمة في الملف: ${fsError.message}`);
            }
        }

        return result;
    }
};

// تصدير الكائن بالكامل
module.exports = myTranslator;