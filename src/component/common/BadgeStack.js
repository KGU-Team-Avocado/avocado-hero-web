import { Chip } from '@mui/material';
import { tags } from '../../assets/tag/tags'
const BadgeStack = ({ stack, type }) => {

    const findOptionByValue = (value) => {
        const options = tags[type];
        const idx = options.findIndex((tag) => tag.value === value);
        return options[idx];
    }

    return (
        <>
            {stack.map((value) => {
                const option = findOptionByValue(value);
                return (
                    option?
                    <Chip
                        label={option?.label}
                        style={{ 
                            backgroundColor: option?.bgColor, 
                            color: option?.txtColor,
                            marginRight:3,
                            marginBottom:3,
                        }}
                    />
                    :
                    null
                )
            }
            )}
        </>
    )
}
export default BadgeStack;