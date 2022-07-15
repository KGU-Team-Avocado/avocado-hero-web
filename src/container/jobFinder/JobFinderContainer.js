import JobFinderFilter from  "../../component/jobFinder/JobFinderFilter";

const JobFinderContainer = () =>  {
    return (
        <div>
            <div className="card m-3" >
                <div className="card-body">
                <h3>채용공고 상세검색</h3>
                <JobFinderFilter/>
                </div>
            </div>
            <div className="card m-3" >
                채용공고 리스트 보여주는곳
            </div>
            
        </div>      
    )
}

export default JobFinderContainer;