import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

const InputEndDay = ({allday, startDay, endDay, handleEndDay}) => {
    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
            <Form.Label>종료일</Form.Label>
            {allday ?
                <DatePicker
                    selected={endDay}
                    selectsEnd
                    startDate={startDay}
                    endDate={endDay}
                    placeholderText="end day"
                    onChange={(date) => handleEndDay(date)}
                    customInput={
                        <Form.Control
                            type="text"
                        />
                    }
                    dateFormat="yyyy-MM-dd"
                />
                :
                <DatePicker
                    selected={endDay}
                    selectsEnd
                    startDate={startDay}
                    endDate={endDay}
                    placeholderText="end day"
                    onChange={(date) => handleEndDay(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="time"
                    customInput={
                        <Form.Control
                            type="text"
                        />
                    }
                    dateFormat="yyyy-MM-dd HH:mm"
                />
            }
        </Form.Group>
    )
}

export default InputEndDay;