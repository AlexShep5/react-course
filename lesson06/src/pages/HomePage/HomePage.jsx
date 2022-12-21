import { Container, Col, Row } from 'react-bootstrap'
import styles from './HomePage.module.scss'
import { Link } from "react-router-dom";


export function HomePage() {
    return (
        <Container >
            <Row className="mt-4">
                <Col className="col-12">
                    <Link className={styles.chatLink} to='/chats'>
                        <h1>Welcome to the chats</h1>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
