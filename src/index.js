const fs = require('fs');
const path = require('path');
const referenceErrors = require('./dict/reference-errors');
const typeErrors = require('./dict/type-errors');
const syntaxErrors = require('./dict/syntax-errors');
const rangeErrors = require('./dict/range-errors');
const uriErrors = require('./dict/uri-errors');

// دمج جميع القواميس
const rawErrors = {
    ...referenceErrors,
    ...typeErrors,
    ...syntaxErrors,
    ...rangeErrors,
    ...uriErrors
};

// ترتيب المفاتيح تنازلياً حسب الطول (الأطول أولاً) لتجنب التطابق الخاطئ
const sortedKeys = Object.keys(rawErrors).sort((a, b) => b.length - a.length);

const myTranslator = {
    logInTerminal: true,
    saveToFile: false,
    saveToMarkdown: false,
    filePath: path.join(process.cwd(), 'errors.log'),
    markdownPath: path.join(process.cwd(), 'errors-report.md'),

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

        for (const key of sortedKeys) {
            if (lowerMessage.includes(key)) {
                result = {
                    original: errorMessage,
                    ...rawErrors[key]
                };
                break;
            }
        }

        if (this.logInTerminal) {
            console.log(`\n============== ❌ خطأ برمجي مترجم ==============`);
            console.log(`📌 نوع الخطأ: ${result.title}`);
            console.log(`💬 المعنى:    ${result.arabicMessage}`);
            console.log(`💡 الشرح:    ${result.explanation}`);
            console.log(`🛠️ الحل:     ${result.solution}`);
            console.log(`================================================\n`);
        }

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
                fs.appendFileSync(this.filePath, logContent, 'utf8');
            } catch (fsError) {
                console.error(`❌ فشل حفظ خطأ الترجمة في الملف: ${fsError.message}`);
            }
        }

        if (this.saveToMarkdown) {
            this._appendToMarkdown(result);
        }

        return result;
    },

    _appendToMarkdown: function(result) {
        const timestamp = new Date().toISOString();
        const mdContent = `## 🐛 خطأ برمجي مترجم

- **📅 التاريخ:** ${timestamp}
- **📌 نوع الخطأ:** ${result.title}
- **💬 المعنى:** ${result.arabicMessage}
- **💡 الشرح:** ${result.explanation}
- **🛠️ الحل:** ${result.solution}

\`\`\`text
${result.original}
\`\`\`

---
`;

        try {
            const isFirst = !fs.existsSync(this.markdownPath);
            if (isFirst) {
                const header = `# 📋 تقرير الأخطاء المترجمة - Arabic Error Translator\n\n_تم إنشاء هذا التقرير تلقائياً بواسطة arabic-error-translator_\n\n---\n\n`;
                fs.writeFileSync(this.markdownPath, header, 'utf8');
            }
            fs.appendFileSync(this.markdownPath, mdContent, 'utf8');
        } catch (fsError) {
            console.error(`❌ فشل حفظ تقرير Markdown: ${fsError.message}`);
        }
    }
};

module.exports = myTranslator;