export default function Education(){

    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const schools = [
        '2007年4月-2012年3月・神田外語大学',
        '2009年8月-2010年6月・ミネソタ州立大学モアヘッド校 交換留学',
        '2021年9月-2022年8月・ブリュッセル自由大学',
    ]

    return (
        <div className="ml-5 text-sm md:text-base">
            {schools.map((school) => (
            <h3 className="mb-2" key={school}>{school}</h3>
            ))}
        </div>
    )
}