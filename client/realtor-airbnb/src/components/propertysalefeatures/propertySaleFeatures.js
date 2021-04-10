export default function PropertySaleFeatures({ data }) {
  return (
    <div>
      {data &&
        data.map((feature, i) => (
          // TODO - Index's being used as keys are placeholders for now
          <div className="flex flex-col" key={i}>
            <span className="text-white text-sm border-b-2 border-gray-500 py-4 mb-2">
              {feature && feature.category}
            </span>
            <ul className="flex justify-between">
              {feature &&
                feature.text.map((text, j) => (
                  <li className="text-gray-400 text-xs" key={j}>{text}</li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
