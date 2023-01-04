import { useRouteError } from 'react-router-dom'

interface ErrorResponse {
    error: {
        data: string,
        error: {
            message: string,
            stack: string
        },
        internal: boolean,
        status: number,
        statusText: string
    }
}


export default function ErrorView() {
    const error: any =  useRouteError()
    console.log(error)
    return (
        <div >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error occurred.</p>
            <p>
                <i>{ error.status }</i>
                <br />
               <i>{ error.statusText }</i>
               <br/>
               <i>{error.error.message}</i>
            </p>
        </div>
    )
}
