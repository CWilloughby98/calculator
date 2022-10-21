import { ACTION } from "./App"


export default function OperationButton({dispatch, operation}: any) {
    return <button onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation }})}>
                {operation}
            </button>
}