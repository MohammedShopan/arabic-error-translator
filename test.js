const Translator = require('./src/index.js');

// تعطيل الطباعة التلقائية أثناء الاختبار
Translator.logInTerminal = false;

let passed = 0;
let failed = 0;
const tests = [];

function addTest(name, message, expectedTitle) {
    tests.push({ name, message, expectedTitle });
}

// ============ ReferenceError ============
addTest("is not defined", "myAge is not defined", "خطأ في المرجع (ReferenceError)");
addTest("Cannot access before init", "Cannot access 'x' before initialization", "خطأ في المرجع (ReferenceError)");

// ============ TypeError ============
addTest("read prop of undefined", "Cannot read properties of undefined (reading 'name')", "خطأ في النوع (TypeError)");
addTest("read prop of null", "Cannot read properties of null (reading 'x')", "خطأ في النوع (TypeError)");
addTest("set prop of undefined", "Cannot set properties of undefined (setting 'x')", "خطأ في النوع (TypeError)");
addTest("set prop of null", "Cannot set properties of null (setting 'x')", "خطأ في النوع (TypeError)");
addTest("is not a function", "user.getName is not a function", "خطأ في النوع (TypeError)");
addTest("is not iterable", "numbers is not iterable", "خطأ في النوع (TypeError)");
addTest("is not a constructor", "Foo is not a constructor", "خطأ في النوع (TypeError)");
addTest("const assignment", "Assignment to constant variable.", "خطأ في النوع (TypeError)");
addTest("cannot destructure", "Cannot destructure property 'name' of undefined", "خطأ في النوع (TypeError)");
addTest("in operator", "Cannot use 'in' operator to search for 'length' in 123", "خطأ في النوع (TypeError)");

// ============ SyntaxError ============
addTest("import outside module", "Cannot use import statement outside a module", "خطأ في القواعد (SyntaxError)");
addTest("unterminated template", "Unterminated template literal", "خطأ في القواعد (SyntaxError)");
addTest("unterminated string", "Unterminated string constant", "خطأ في القواعد (SyntaxError)");
addTest("unexpected token", "Unexpected token '}'", "خطأ في القواعد (SyntaxError)");
addTest("unexpected identifier", "Unexpected identifier", "خطأ في القواعد (SyntaxError)");
addTest("unexpected number", "Unexpected number", "خطأ في القواعد (SyntaxError)");
addTest("missing )", "Missing ) after argument list", "خطأ في القواعد (SyntaxError)");
addTest("missing }", "missing } after property list", "خطأ في القواعد (SyntaxError)");
addTest("missing ]", "missing ] after element list", "خطأ في القواعد (SyntaxError)");
addTest("unexpected end of input", "Unexpected end of input", "خطأ في القواعد (SyntaxError)");

// ============ RangeError ============
addTest("call stack", "Maximum call stack size exceeded", "خطأ في المدى (RangeError)");
addTest("invalid array length", "Invalid array length", "خطأ في المدى (RangeError)");
addTest("toFixed digits", "toFixed() digits argument must be between 0 and 100", "خطأ في المدى (RangeError)");
addTest("precision out of range", "precision is out of range", "خطأ في المدى (RangeError)");

// ============ URIError ============
addTest("uri malformed", "URI malformed", "خطأ في الرابط (URIError)");
addTest("failed to decode", "Failed to decode param", "خطأ في الرابط (URIError)");

// ============ Unknown ============
addTest("unknown error", "Some unknown error happened", "خطأ غير معروف حالياً");

console.log("🧪 بدء اختبار arabic-error-translator\n");

for (const test of tests) {
    const result = Translator.translate(test.message);
    if (result.title === test.expectedTitle) {
        console.log(`  ✅ ${test.name}`);
        passed++;
    } else {
        console.log(`  ❌ ${test.name}`);
        console.log(`     الرسالة: "${test.message}"`);
        console.log(`     المتوقع: ${test.expectedTitle}`);
        console.log(`     النتيجة: ${result.title}`);
        failed++;
    }
}

console.log(`\n📊 النتيجة: ${passed} ✅ / ${failed} ❌ من أصل ${tests.length} اختبار`);

// ============ اختبار saveToFile ============
console.log("\n--- 📁 اختبار saveToFile ---");
Translator.saveToFile = true;
Translator.filePath = "./test-errors.log";
Translator.translate("myAge is not defined");
console.log("✅ تم حفظ test-errors.log");

// ============ اختبار saveToMarkdown ============
console.log("\n--- 📝 اختبار saveToMarkdown ---");
Translator.saveToMarkdown = true;
Translator.markdownPath = "./test-errors-report.md";
Translator.translate("myAge is not defined");
Translator.translate("Cannot read properties of undefined (reading 'name')");
Translator.translate("Cannot use 'in' operator to search for 'length' in 123");
console.log("✅ تم حفظ test-errors-report.md");

// ملخص
if (failed === 0) {
    console.log(`\n🎉 جميع الاختبارات ${tests.length}/"${tests.length}" ناجحة!`);
} else {
    console.log(`\n⚠️  فشل ${failed} اختبار${failed > 1 ? 'ات' : ''}`);
    process.exit(1);
}
