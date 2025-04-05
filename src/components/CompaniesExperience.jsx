import vertexLogo from "../assets/logo.svg";
import company1Logo from "../assets/ceo.png";

const CompaniesExperience = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
    <div className="border-[#1D1D1D] bg-black border-1 p-4 md:p-6 rounded-md">
      <h3 className="text-xl font-semibold">Founded Companies</h3>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">02</h1>
      <div className="mt-4 space-y-4">
        {[
          { name: "Vertx", year: "2025", industry: "Fintech", role: "CEO", logo: vertexLogo, bgColor: "bg-green-600" },
          { name: "Company", year: "2023", industry: "QuickCommerce", role: "PROPRIETOR", logo: company1Logo, bgColor: "bg-purple-600" },
        ].map((company, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={company.logo} alt={company.name} className="w-[30px] h-[30px] rounded-md border" />
              <div>
                <p className="text-sm font-semibold flex items-center">
                  {company.name}
                  <span className={`text-xs font-semibold text-white px-2 ml-3 rounded ${company.bgColor}`}>
                    {company.role}
                  </span>
                </p>
                <div className="flex space-x-1">
                  <p className="text-xs text-gray-400">Founded in {company.year} in</p>
                  <p className="text-xs font-semibold">{company.industry}</p>
                </div>
              </div>
            </div>
            <span className="text-gray-400 text-xs md:text-sm cursor-pointer">View Profile</span>
          </div>
        ))}
      </div>
    </div>

    <div className="border-[#1D1D1D] bg-black border-1 p-4 md:p-6 rounded-md">
      <h3 className="text-xl font-semibold">Experience</h3>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">03</h1>
      <div className="mt-4 space-y-3">
        {["Company A", "Company B", "Company C"].map((company, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-gray-300 rounded-md"></div>
              <p className="text-sm font-semibold">{company}</p>
            </div>
            <span className="text-gray-400 text-xs md:text-sm cursor-pointer">View Profile</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CompaniesExperience;
