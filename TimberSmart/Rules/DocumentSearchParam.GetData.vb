Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Text.RegularExpressions
Imports System.Web
Imports System.Web.Security
Imports TimberSmart.Data
Imports TimberSmart.Models

Namespace Rules
    
    Partial Public Class DocumentSearchParamBusinessRules
        Inherits TimberSmart.Rules.SharedBusinessRules
        
        ''' <summary>
        ''' This method will execute in any view before an action
        ''' with a command name that matches "Select".
        ''' </summary>
        <Rule("GetData")>  _
        Public Sub GetDataImplementation(ByVal instance As DocumentSearchParamModel)
            ResultSet = CreateDocumentSearchParamDataTable()
        End Sub
        
        Private Function CreateDocumentSearchParamDataTable() As DataTable
            Dim dt As DataTable = New DataTable()
            dt.Columns.Add("CustomerID", GetType(Int32))
            dt.Columns.Add("SourceID", GetType([String]))
            dt.Columns.Add("GridResults", GetType([String]))
            '
            ' Populate rows of table "dt" with data from any source (web service, file system, database, etc.)
            '
            Dim Row As DataRow = dt.NewRow

            Row("SourceID") = DBNull.Value

            dt.Rows.Add(Row)


            Return dt
        End Function
    End Class
End Namespace
