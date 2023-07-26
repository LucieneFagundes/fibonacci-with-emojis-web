"use client";
import { fibonacci } from "@/utils/fibonacci";
import { replaceToEmoji } from "@/utils/replace-to-emojis";
import { ChangeEvent, useState } from "react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Home() {
	const [fiboArray, setFiboArray] = useState<string[]>([]);
	const [inputFilled, setInputFilled] = useState<number>(0);
	const [validInput, setValidInput] = useState(false);

	function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
		if (isNaN(event.target.valueAsNumber) || event.target.valueAsNumber < 1) {
			setValidInput(false);
			return
		}
		setInputFilled(event.target.valueAsNumber);
		setValidInput(true);
	}

	function handleGenerateFibonacci() {
		const generatedFibo = fibonacci(inputFilled);
		const generatedFiboEmoji = replaceToEmoji(generatedFibo);

		setFiboArray(generatedFiboEmoji);
		setInputFilled(0);
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24 bg-slate-200 dark:bg-slate-800 xs:p-5">
			<h1 className="text-3xl text-gray-600 dark:text-gray-300 xs:text-center">
				Fibonacci with Emojis 😁
			</h1>
			<div className="flex justify-center items-center gap-2 w-3/4 xs:w-full xs:flex-col">
				<input
					type="number"
					className="w-72 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-purple-500 block p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-purple-500 focus:outline-none"
					placeholder="Digite um número a partir de 1"
					onChange={handleChangeInput}
				/>

				<button
					onClick={handleGenerateFibonacci}
					disabled={!validInput}
					className={classNames(
						validInput
							? "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer"
							: "text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-600 cursor-not-allowed",
						"relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-sm font-medium rounded-lg focus:outline-none"
					)}
				>
					GO!
				</button>
			</div>
			<div className=" flex flex-col items-center justify-center text-center text-gray-600 dark:text-gray-300">
				{fiboArray.length > 0 ? (
					<div className="h-36">
						<p className="mb-2">
							Entrada: <span className="font-bold text-purple-500 ">{fiboArray.length}</span>{" "}
						</p>
						<p className="mb-2">Saída:</p>
						<div className="w-full max-h-52 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-900 ">
							{fiboArray.join(" - ")}
						</div>
					</div>
				) : (
					<div className="h-36 flex flex-col items-center justify-center text-center text-gray-600 dark:text-gray-400">
						<p>Ainda não gerou a sequência?</p>
						<p>Então digite um número aqui em cima e aperte em GO!</p>
					</div>
				)}
			</div>
		</main>
	);
}
