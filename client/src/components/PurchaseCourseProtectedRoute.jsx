import { useGetCourseDetailWithStatusQuery } from "@/features/api/purchaseApi";

import { useParams, Navigate } from "react-router-dom";

const PurchaseCourseProtectedRoute = ({children}) => {
    const {courseId} = useParams();
    const {data, isLoading, isError} = useGetCourseDetailWithStatusQuery(courseId);

    if(isLoading) return <div className="flex items-center justify-center min-h-screen"><p>Loading...</p></div>
    
    if(isError) return <Navigate to={`/course-detail/${courseId}`}/>

    return data?.purchased ? children : <Navigate to={`/course-detail/${courseId}`}/>
}
export default PurchaseCourseProtectedRoute;