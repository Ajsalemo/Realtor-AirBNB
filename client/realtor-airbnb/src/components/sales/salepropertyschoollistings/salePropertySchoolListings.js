import capitalizeString from "@helpers/functions/capitalizeString";

export default function SalePropertySchoolListings({ schools }) {
  return (
    <div>
      {schools &&
        schools.length > 0 &&
        schools.map((school, i) => (
          <div
            className="grid grid-cols-6 gap-1  md:gap-4"
            key={`schools-${i}`}
          >
            <div className="flex flex-col pb-4">
              <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                Rating
              </span>
              <span className="text-gray-400 text-xs">
                {school && school.ratings && school.ratings.great_schools_rating
                  ? `${school.ratings.great_schools_rating}/10`
                  : "Not available"}
              </span>
            </div>
            <div className="flex flex-col pb-4">
              <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                School Name
              </span>
              <span className="text-gray-400 text-xs">
                {school && school.name ? school.name : "Not available"}
              </span>
            </div>
            <div className="flex flex-col pb-4">
              <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                Grades
              </span>
              {/* 
                If one grade range is not null as opposed to the other - then display only the available range(low or high) 
                If both grade ranges(low and high) are available then format them and display them
            */}
              <span className="text-gray-400 text-xs">
                {school && school.grades && school.grades.range
                  ? school.grades.range.low && !school.grades.range.high
                    ? school.grades.range.low
                    : !school.grades.range.low && school.grades.range.high
                    ? school.grades.range.high
                    : school.grades.range.low && school.grades.range.high
                    ? `${school.grades.range.low} - ${school.grades.range.high}`
                    : null
                  : "Not available"}
              </span>
            </div>
            <div className="flex flex-col pb-4">
              <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                Type
              </span>
              <span className="text-gray-400 text-xs">
                {/* Since the school type is returned in all lowercase - we capitalize the first letter of the word */}
                {school && school.funding_type
                  ? capitalizeString(school.funding_type)
                  : "Not available"}
              </span>
            </div>
            <div className="flex flex-col pb-4">
              <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                Student Count
              </span>
              <span className="text-gray-400 text-xs">
                {school && school.student_count ? school.student_count : "Not available"}
              </span>
            </div>
            <div className="flex flex-col pb-4">
              <span className="text-gray-500 text-xs border-b-2 border-gray-500 mb-2">
                Relevance
              </span>
              <span className="text-gray-400 text-xs">
                {/* Since the school relevance is returned in all lowercase - we capitalize the first letter of the word */}
                {school && school.relevance
                  ? capitalizeString(school.relevance)
                  : "Not available"}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
