import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

function ContactPage() {
    return (
        <Container
            className="d-flex flex-column align-items-center comic-neue-regular mt-5"
            style={{ minHeight: '100vh' }}
        >
            <Row className="align-items-center text-center text-md-start">
                <Col md={4} className="mb-4 mb-md-0">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={200}
                        alt="Profile"
                        className="mb-4"
                    />
                </Col>

                {/* Kolom untuk teks */}
                <Col md={8}>
                    <h1 className="mb-3">Sweet n Silk</h1>
                    <p className="custom-font-20">
                        Sweet and Silk adalah produk brownies sehat yang menggunakan bahan dasar rambut jagung. Selain itu kandungan di dalamnya juga dibuat dengan bahan-bahan yang bebas gula dan tepung, seperti halnya gula yang diganti oleh pemanis bebas gula dan tepung yang diganti oleh kulit pisang.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage
