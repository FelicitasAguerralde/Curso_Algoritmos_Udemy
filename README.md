## Master the coding interview data structures algorithms (Udemy)

- Notación BIg O
1. El peor de los casos: 
Siempre analizamos el peor escenario posible.
👉 Ejemplo:
Si un algoritmo a veces tarda n y otras n², usamos O(n²).
✔️ Porque nos interesa el límite máximo de tiempo que podría tomar.
2. Eliminar constantes: 
Las constantes no importan en Big-O
👉 Ejemplo:
O(2n) → O(n)
O(100) → O(1)
✔️ Porque Big-O mide crecimiento, no valores exactos.
Ejercicio_3

3. Diferentes términos para las entradas distintas:
Si hay más de una entrada independiente, usamos variables diferentes.
👉 Ejemplo:
Un algoritmo que procesa dos listas:
tamaño n y tamaño m → O(n + m)
✔️ No todo depende de una sola variable.
Ejercicio_4

4. Eliminar términos no dominantes:
Solo se conserva el término que crece más rápido.
👉 Ejemplo:
O(n² + n + 10) → O(n²)
O(n log n + n) → O(n log n)
✔️ Porque cuando n es grande, los términos pequeños son irrelevantes.