type FactorType = "flight-d" | "flight-i" | "meat";

type DistanceUnit = "km" | "miles";
type CurrencyUnit = "eur" | "gbp" | "usd";

export interface FactorParams {
  type: FactorType;
  id: string;
  value: number;
  unit: DistanceUnit | CurrencyUnit;
}

export interface EstimationDto {
  emission_factor: string;
  parameters: EstimationParams;
}

interface DistanceParams {
  distance: number;
  distance_unit: DistanceUnit;
}
interface CurrencyParams {
  money: number;
  money_unit: CurrencyUnit;
}

export type EstimationParams = DistanceParams | CurrencyParams;

function getEmissionParams(params: FactorParams): EstimationParams {
  if (params.type === "meat")
    return { money: params.value, money_unit: params.unit as CurrencyUnit };

  return { distance: params.value, distance_unit: params.unit as DistanceUnit };
}

export default async function estimateFactor(
  params: FactorParams
): Promise<any> {
  const reqParams = getEmissionParams(params);
  const reqBody: EstimationDto = {
    emission_factor: params.id,
    parameters: reqParams,
  };

  const res: Response = await fetch(
    "https://beta3.api.climatiq.io/estimate",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLIMATIQ_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );
  const data = await res.json();
  return data;
}
