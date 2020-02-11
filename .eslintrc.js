module.exports = {
    parser: "babel-eslint",
    parserOptions : {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true
        }
    },
    // extends: [ // Kế thừa lại trên eslint-plugin-react
    //     "eslint:recommended",
    //     "plugin:react/recommended",
    //     // "airbnb"//Kế thừa lại từ airbnb
    //   ],
    rules : {
        semi: 1,//Check dấu ;
        // quotes: [2, 'single'],//Check dấu nháy đôi phải là dấu nháy đơn
        // 'react/prop-types': 1,//Check prop-types(Check dữ liệu đầu vào của mỗi prop)
    }
}