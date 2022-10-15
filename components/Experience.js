const Experience = () => {
    // const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const jobs = [
        '2012年4月-2013年4月・株式会社イーオン',
        '2013年5月-現在・So ENGLISH!英語教室',
        '2013年5月-2019年5月・合同会社Juerias LGBT Wedding',
        '2015年5月-2017年1月・株式会社ジーピーオンライン',
        '2016年4月-2021年9月・学校法人三幸学園',
        '2018年4月-2021年9月・学校法人佐野学園 神田外語学院',
    ]

    return (
        <div className="ml-5">
            {jobs.map((job) => (
            <h3 className="mb-2" key={job}>{job}</h3>
            ))}
        </div>
    )
}

export default Experience