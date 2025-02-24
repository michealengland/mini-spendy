const PLACEHOLDER_DATA = [
  {
    id: 'unique-1',
    name: 'plan-1',
    planItems: [],
  }
] as PlanData;

enum Currency {
  USD = 'usd'
}

enum Frequency {
  monthly = 'monthly',
  yearly = 'yearly'
}

interface Plan {
  id: string;
  name: string;
  planItems: Array<Object>;
}

type PlanData = Plan[];

interface PlanItem {
  amount: number;
  currency: Currency;
  frequency: Frequency;
  id: string;
  name: string;
  planId: Plan['id'];
}

function addPlan(name: Plan["name"]): Plan {
  // TODO Add checks here.
  return {
    id: 'unique-1',
    name,
    planItems: [],
  }
}

function getPlans(): PlanData {
  // PLACEHOLDER DATA
  const data = PLACEHOLDER_DATA;

  return data;
}

function getPlan(id: Plan["id"]): Plan | null {
  const data = getPlans() as PlanData;
  const locatedPlan = data.find((plan) => plan.id === id)

  if (! locatedPlan) {
    return null;
  }

  return locatedPlan;
}

function addPlanItem(item: PlanItem): PlanItem | null {
  const { id } = item;
  const plan = getPlan(id) as Plan;
  const { planItems } = plan;

  if (!planItems) {
    return null;
  }

  // TODO - Add checks here.
  planItems.push(item);

  return item;
}
