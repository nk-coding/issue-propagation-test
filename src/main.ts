import { defaultPropagationConfig } from "./defaultPropagationConfig";
import { testPropagation } from "./scoreCalculation";
import { testGraph } from "./testGraph";

testPropagation(defaultPropagationConfig, testGraph)