import JobFinderFilter from  "../../component/jobFinder/JobFinderFilter";
import JobFinderList from "../jobFinder/JobFinderList"
const JobFinderContainer = () =>  {
    return (
        <div>
            <div className="card m-3" >
                <div className="card-body">
                <h3>채용공고 상세검색</h3>
                <JobFinderFilter/>
                </div>
            </div>
            <div className="m-3" >
                <JobFinderList/>
            </div>
            
        </div>      
    )
}

export default JobFinderContainer;