function simulate() {
// パラメータの設定
  const a = 0.1; // A個体が増加するための定数
  const b = 0.001; // AとBの相互作用によるA個体の減少率
  const c = 0.0005; // AとBの相互作用によるB個体の増加率
  const d = 0.1; // B個体が減少するための定数

  // 初期値の設定
  let x = Number(document.getElementById("x-input").value); // A個体の初期数
  let y = Number(document.getElementById("y-input").value); // B個体の初期数

  // シミュレーションの実行
  let tmax = Number(document.getElementById("t-input").value)
  const time = [];
  const populationA = [];
  const populationB = [];

  for (let t = 0; t < tmax; t++) {
  // 時間tにおけるAとBの個体数を保存
    time.push(t);
    populationA.push(x);
    populationB.push(y);

    // 時間t+1におけるAとBの個体数を計算
    const newX = x + a * x - b * x * y;
    const newY = y + c * x * y - d * y;

    // 次の時刻のAとBの個体数を更新
    x = newX > 0 ? newX : 0;
    y = newY > 0 ? newY : 0;
  }
    // グラフを描画
  const traceA = { x: time, y: populationA, mode: 'markers', name: 'Prey' };
  const traceB = { x: time, y: populationB, mode: 'markers', name: 'Predator' };
  const layout = { title: 'Population Dynamics Simulation', xaxis: { title: 'Time' }, yaxis: { title: 'Population' } };
  Plotly.newPlot('plot', [traceA, traceB], layout);
}
