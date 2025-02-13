import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();

  const handleChange = (name, value) => {
    params.set(name, value);

    setParams(params);
  };
  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
      <div className="flex flex-col gap-2">
        <label className="font-bold">Konum</label>
        <select
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="ör:Stockholm"
          className="border py-1 px-4 rounded-md"
          type="text"
        >
          <option value="">Seçiniz</option>
          <option>İstanbul</option>
          <option>Ankara</option>
          <option>Antalya</option>
          <option>Bursa</option>
          <option>Adana</option>
          <option>Mersin</option>
          <option>İzmir</option>
          <option>Eskişehir</option>
          <option>Rize</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold">Yer Arama</label>
        <input
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="ör:Stockholm"
          className="border py-1 px-4 rounded-md"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold">Sıralama</label>
        <select
          onChange={(e) => handleChange("order", e.target.value)}
          placeholder="ör:Seaside Villa"
          className="border py-1 px-4 rounded-md"
          type="text"
        >
          <option value="">Seçiniz</option>
          <option value="price-asc">Fiyat: düşükten yükseğe</option>
          <option value="price-desc">Fiyat: yüksekten düşüğe</option>
          <option value="rating-asc">Yıldız: düşükten yükseğe</option>
          <option value="rating-desc">Yıldız: yüksekten düşüğe</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="reset"
          onClick={() => setParams({})}
          className="bg-blue-500 p-1 px-4 text-white font-bold rounded-md w-fit"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
