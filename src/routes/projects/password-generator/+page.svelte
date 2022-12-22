<script lang="ts">
	let passwordLength: number = 8;
	let password = '';
	let isLowerCase = true;
	let isUpperCase = false;
	let isNumber = false;
	let isSymbol = false;

	const keys = {
		upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		lowerCase: 'abcdefghijklmnopqrstuvwxyz',
		number: '0123456789',
		symbol: '!@#$%^&*()_+~\\`|}{[]:;?><,./-='
	};

	const getKey = [
		function upperCase() {
			return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
		},
		function lowerCase() {
			return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
		},
		function number() {
			return keys.number[Math.floor(Math.random() * keys.number.length)];
		},
		function symbol() {
			return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
		}
	];

	function generatePassword() {
		if (!isLowerCase && !isUpperCase && !isNumber && !isSymbol) {
			alert('check a box');
			return;
		}
		password = '';
		while (passwordLength > password.length) {
			let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
			const keyType = keyToAdd.name;
			if (keyType === 'lowerCase' && !isLowerCase) continue;
			if (keyType === 'upperCase' && !isUpperCase) continue;
			if (keyType === 'number' && !isNumber) continue;
			if (keyType === 'symbol' && !isSymbol) continue;
			password += keyToAdd();
		}
	}

	function copyPassword() {
		navigator.clipboard.writeText(password);
	}
</script>

<section class="flex h-screen flex-col items-center justify-center text-nord5">
	<div class="flex flex-col gap-10 rounded-lg border border-nord10 p-16">
		<div class="">
			<h1 class="text-center text-2xl text-nord5">Password Generator</h1>
		</div>

		<div class="flex flex-col gap-2">
			<input
				on:click={copyPassword}
				class="w-full cursor-pointer appearance-none rounded bg-nord4 py-2 px-4 leading-tight text-nord3 ring ring-nord10 focus:outline-none"
				type="text"
				placeholder="Generate Password"
				readonly
				bind:value={password}
			/>

			<div class="flex items-center justify-between">
				<span>Character Length</span>
				<span class="text-xl text-nord11">{passwordLength}</span>
			</div>

			<input
				class="mb-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-nord4 accent-nord10"
				type="range"
				min="6"
				max="30"
				bind:value={passwordLength}
				name=""
				id=""
			/>

			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-2">
					<input
						type="checkbox"
						name="lowercase"
						bind:checked={isLowerCase}
						class="h-4 w-4 rounded-lg bg-nord4 accent-nord10 focus:ring-nord10"
					/>
					<label for="lowercase">Include Lowercase</label>
				</div>

				<div class="flex items-center gap-2">
					<input
						type="checkbox"
						name="uppercase"
						bind:checked={isUpperCase}
						class="h-4 w-4 rounded-lg bg-nord4 accent-nord10 focus:ring-nord10"
					/>
					<label for="uppercase">Include Uppercase</label>
				</div>

				<div class="flex items-center gap-2">
					<input
						type="checkbox"
						name="number"
						bind:checked={isNumber}
						class="h-4 w-4 rounded-lg bg-nord4 accent-nord10 focus:ring-nord10"
					/>
					<label for="number">Include Number</label>
				</div>

				<div class="flex items-center gap-2">
					<input
						type="checkbox"
						name="symbol"
						bind:checked={isSymbol}
						class="h-4 w-4 rounded-lg bg-nord4 accent-nord10 focus:ring-nord10"
					/>
					<label for="symbol">Include Symbol</label>
				</div>
			</div>
		</div>
		<button
			class="rounded-lg border border-nord10 p-2 text-nord5 transition-all ease-in hover:bg-nord10 hover:text-nord5"
			on:click={generatePassword}>Generate</button
		>
	</div>
</section>
