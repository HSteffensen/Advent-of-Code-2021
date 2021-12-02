import { examples } from "./day01/examples"

export type Example = {
    text: string,
    part1Answer: string,
    part2Answer: string,
}

export type Examples = Array<Example>

export abstract class Solution {
    examples: Examples
    input: string

    constructor(examples: Examples, input: string) {
        this.examples = examples
        this.input = input
    }

    abstract part1(input: string): string;

    abstract part2(input: string): string;
    
    runExamples(): string {
        return examples.map((example, index) => {
            if (example.part1Answer) {
                const answer = this.part1(example.text)
                if (answer !== example.part1Answer) {
                    return `Incorrect on example ${index} for part 1: expected '${example.part1Answer}', but got '${answer}'`
                }
            }
            if (example.part2Answer) {
                const answer = this.part2(example.text)
                if (answer !== example.part2Answer) {
                    return `Incorrect on example ${index} for part 2: expected '${example.part2Answer}', but got '${answer}'`
                }
            }
        }).filter(it => it).join("\n");
    }

    
}
