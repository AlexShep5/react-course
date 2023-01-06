import { Container, Col, Row } from 'react-bootstrap'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { LoadingData } from "../../components/LoadingData/LoadingData"
import { LoadingError } from "../../components/LoadingError/LoadingError"
import { Card } from "../../components/Card/Card"
import { selectGists, selectGistsError, selectGistsLoading } from '../../store/gists/selectors'
import { getAllGists } from '../../store/gists/actions'

export function GistsPage() {
  const dispatch = useDispatch()

  const gists = useSelector(selectGists)
  const error = useSelector(selectGistsError)
  const loading = useSelector(selectGistsLoading)

  const requestGists = () => {
    dispatch(getAllGists())
  }

  useEffect(() => {
    requestGists()
  }, [])

  if (error) {
    return (
      <Container>
        <Row className="mt-4">
          <Col className="col-12">
            <LoadingError caption={error} request={requestGists} />
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col className="col-12 col-sm-12 col-md-12 col-lg-8">
            {loading && <LoadingData />}
            {gists.map((item, index) => (
              <Card text={item.text} created={item.createdAt} updated={item.updatedAt} key={index} idx={index} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}
