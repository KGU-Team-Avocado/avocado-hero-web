import JobFinderFilter from  "../../component/jobFinder/JobFinderFilter";
import JobFinderList from "../jobFinder/JobFinderList"
const JobFinderContainer = () =>  {
    return (
        <div>
            <div className="card m-3" >
                <div className="card-body">
                <h2>채용공고 상세검색</h2>
                <JobFinderFilter/>
                </div>
            </div>
            <div className="card m-3" >
                <div className="card-body">
                    {/* <h2>채용공고 리스트</h2> */}
                    <JobFinderList />
                </div>
            </div>

        </div>      
    )
}

export default JobFinderContainer;