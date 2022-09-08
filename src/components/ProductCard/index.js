import {
    AddButton,
    Subtitle,
    TextContainer,
    Title,
    Wrapper
} from "./PCardStyles";

const ProductCard = ({ name, imageUrl, price }) => {
    return (
        <Wrapper background={imageUrl}>
            <AddButton onClick={() => console.log(`Added ${name} to cart`)}>
                <p>+</p>
            </AddButton>
            <TextContainer>
                <Title>{name}</Title>
                <Subtitle>{price}.00$</Subtitle>
            </TextContainer>
        </Wrapper>
    );
};

export default ProductCard;