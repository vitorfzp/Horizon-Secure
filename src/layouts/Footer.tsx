// src/layouts/Footer.tsx
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto py-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Horizon Secure. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}