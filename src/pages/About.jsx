import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Introduction = styled.div`
    text-align: center;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url('https://wallpapercave.com/wp/wp7039156.jpg')
            center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const TeamMember = styled.div`
    width: 100%;
    height: 300px;
    transform: translateY(-120px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
`

const Member = styled.div`
    width: 15%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;
`

const MemberImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
`

const MemberName = styled.text`
    font-weight: bold;
    letter-spacing: 1px;
`

const AboutUs = () => {
    return (
        <Container>
            <Navbar/>
            <Introduction>
                <h1>Who are we? Meet our team!</h1>
                We listen, we disscuss and we develop. We love to learn and use the lastest technologies.
            </Introduction>

            <TeamMember>
                <Member>
                    <MemberImg src = {"resource/Members/Viet_1953097.png"} alt = {"VietImg"} />
                    <MemberName>
                        Tran Quoc Viet <br/>
                        Student ID: 1953097
                    </MemberName>
                    Front-end Developer
                </Member>

                <Member>
                    <MemberImg src = {"resource/Members/Cat_1952587.jpg"} alt = {"CatImg"} />
                    <MemberName>
                        Nguyen Hoang Cat <br/>
                        Student ID: 1952587
                    </MemberName>
                    Back-end Developer 
                </Member>

                <Member>
                    <MemberImg src = {"resource/Members/Duyen_1952620.jpg"} alt = {"HungImg"} />
                    <MemberName>
                        Luong Duy Hung <br/>
                        Student ID: 1952747
                    </MemberName>
                    Back-end Developer 
                </Member>

                <Member>
                    <MemberImg src = {"resource/Members/Thanh_1952983.png"} alt = {"ThanhImg"} />
                    <MemberName>
                        Nguyen Duc Thanh <br/>
                        Student ID: 1952983
                    </MemberName>
                    Front-end Developer 
                </Member>

                <Member>
                    <MemberImg src = {"resource/Members/Phong_1952916.png"} alt = {"DatImg"} />
                    <MemberName>
                        Cao Tien Dat <br/>
                        Student ID: 2052434
                    </MemberName>
                    System Engineer
                </Member>
            </TeamMember>
            <br/>
        </Container>
    );
};

export default AboutUs;