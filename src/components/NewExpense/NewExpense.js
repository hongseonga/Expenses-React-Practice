import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
//여긴 ExpenseForm 컴포넌트 상위에 있는 NewExpense 컴포넌트 입니다. 부모 컴포넌트입니다.
// ExpenseForm의 부모이자 또한 App 컴포넌트의 자식입니다

const NewExpense = (props) => {
    // 받아올 데이터가 있어야 하므로 매개변수를 하나 넣어준다 (이름은 맘대루)
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            // 아이디를 랜덤으로 출력하는 이유가 무엇인가?
            id : Math.random().toString(),
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        // NewExpense에 있는 데이터를 App에 넘겨줘야함
        console.log(expenseData)
    }

    return (
        <div className="new-expense">
            {/* onSaveExpenseData속성은 값으로 saveExpenseDataHandler함수를 받음 */}
            {/* 핸들러 함수 자체가 ExpenseForm 컴포넌트에 전달되는것이다 */}
             <ExpenseForm onSaveExpense={saveExpenseHandler}/>
        </div>
       
    )
}

export  default NewExpense;