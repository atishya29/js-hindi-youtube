// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// these are simple examples 
// problem occur when we do not compare same datatypes

// console.log("2" > 1);
// console.log("02" > 1); // in this type of comparision it is possible that predictable result not occur
// always compare same data types


// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); //true



// Reason for the above results

// In JavaScript, the results of the comparisons involving null can be surprising due to type coercion rules. Let's examine each line individually to understand why it behaves this way:

// 1. console.log(null > 0); // false
// Reasoning: When using the > operator, JavaScript attempts to convert null to a number for comparison.
// null is converted to 0 in numeric contexts, so this comparison becomes 0 > 0, which is false.
// 2. console.log(null == 0); // false
// Reasoning: The == (loose equality) operator in JavaScript does not perform numeric conversion between null and 0.
// null is only loosely equal to undefined but not to 0 or any other number.
// Hence, null == 0 is false.
// 3. console.log(null >= 0); // true
// Reasoning: The >= operator also converts null to a number (like > and <).
// Since null is converted to 0, this comparison becomes 0 >= 0, which is true.
// Summary:
// In summary, null behaves differently depending on the type of comparison:

// For numeric comparisons (>, <, >=, <=), null is converted to 0.
// For equality checks (==, ===), null is only equal to undefined and not to 0.
// These conversion rules are part of JavaScript's type coercion mechanisms, which can lead to these seemingly inconsistent results.



// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false


// reason for above results
// In JavaScript, comparisons involving undefined yield somewhat unique results due to specific type coercion rules. Let's break down each line to understand the outcomes:

// 1. console.log(undefined > 0); // false
// Reasoning: When using the > operator, JavaScript attempts to convert undefined to a number for comparison.
// undefined is converted to NaN (Not-a-Number) in numeric contexts, and any comparison involving NaN (like NaN > 0) always returns false.
// 2. console.log(undefined == 0); // false
// Reasoning: With the == (loose equality) operator, JavaScript does not perform numeric conversion between undefined and 0.
// undefined is only loosely equal to null and not to any other value, including 0.
// Therefore, undefined == 0 is false.
// 3. console.log(undefined >= 0); // false
// Reasoning: Similar to undefined > 0, JavaScript converts undefined to NaN when using the >= operator.
// Comparisons with NaN always yield false, so NaN >= 0 is false.
// Summary
// For comparisons involving undefined:

// In numeric comparisons (>, <, >=, <=), undefined is converted to NaN, resulting in false for all comparisons.
// In equality checks (==, ===), undefined is only loosely equal to null, not to any numeric value, including 0.
// This behavior stems from JavaScript's rules for type coercion and how it handles NaN in comparisons.



// in short just remember in js comparision operator and equality check works differently btw these type of comparison are avoided



// strict check === (it not only checks the value but also the datatype)
// console.log("2" == 2); // true
// console.log("2" === 2); //false

