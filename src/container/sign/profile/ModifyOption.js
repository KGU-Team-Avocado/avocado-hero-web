import { MultiSelect } from "react-multi-select-component";

const ModifyOption = ({option, selected, setSelected, modifyOption}) => {
    return (
        <div>
            <MultiSelect
                options={option}
                value={selected}
                onChange={setSelected}
                //labelledBy="Select"
            />
            <div className="mt-2 d-flex justify-content-end">
                {/* <button type="button" className="btn btn-secondary me-2" onClick={() => modifyOption()} >저장</button> */}
                {/* <button type="button" className="btn btn-danger" onClick={() => cancleEdit("")} data-bs-dismiss="modal">취소</button> */}
            </div>
        </div>
    )
}

export default ModifyOption;