import styled from "@emotion/styled";

export const WrapperProfile = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    @media (min-width: 600px) {
        display: flex;
        flex-direction: column;

        span {
            margin: 30px
        }
    }

`
export const WrapperProfileBody = styled.section`
        display: flex;
        flex-direction: column;
        width: 100%;
        span {
            margin: 30px 0 30px 30px 
        }
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 50px 0 0 ;
        }
    

`
export const WrapperPortions = styled.div`
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
`
export const WrapperPortion = styled.div`
    display: flex; 
    margin:  30px 50px;
    justify-content: space-between;
    align-items: center;
        span:nth-of-type(1n){
            font-weight: 600;
            text-align: left;
        }
        p span{
            font-size: 20px;
            width: 50px 
        }
        @media (min-width: 600px) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span:nth-of-type(2n){
                display: flex;
                justify-content: center;
                align-items: center;
                margin:  10px;
                width:   100%;
                button{
                    margin: 10px;
                }
            }
        }
`
