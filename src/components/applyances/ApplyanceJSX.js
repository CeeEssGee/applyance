// child of Applyance and MyApplyance (JSX code for both)
import { Link } from "react-router-dom"
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap"

export const ApplyanceJSX = ({ id, makeModel, location, manual, picture, editButton, deleteButton }) => {

    return (
        <>
            <Card
                className="my-2"
                color="white"
                outline
                style={{
                    width: '25rem',
                    // height: '40rem'
                }}
            >
                <section className="applyanceSection">
                        <CardHeader>
                            <header>
                                <Link to={`/all-applyances/${id}`}>{makeModel}</Link>
                            </header>
                        </CardHeader>
                        <img className="picture" src={picture} alt="appliance" />
                        <CardBody>
                    <div>
                        <div className="tag">{location}</div>
                        <div className="manualLink">
                            <Link to={manual}>Link to Manual</Link>
                        </div>
                    </div>

                    <div className="picture">
                    </div>

                    </CardBody>

                    <footer>
                        {editButton()}
                        {deleteButton()}
                    </footer>
                </section>
            </Card>
        </>
    )
}